import express from 'express';
const router = new express.Router();
import multer from 'multer';
import Header from '../models/Header.js';

//image storage path
// Image storage path
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../public/Home'));
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    },
  });
  
  // Image filter
  const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith('image')) {
      callback(null, true);
    } else {
      callback(new Error('Only images are allowed'));
    }
  };
  
  const upload = multer({
    storage: storage,
    fileFilter: isImage,
  });
  
  // Upload route
  router.post('/upload', upload.single('image'), (req, res) => {
    try {
      res.json({ filePath: `/Home/${req.file.filename}` });
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  

// Header Insert
router.post('/insert-header', upload.single('image'), async (req, res) => {
    const image = req.file.filename;
    const { title, description } = req.body;

    if (!title || !description || !image) {
        res.status(401).json({ status:401, message: "All fields are required" });
    }

    try {
        const headerData = new Header(
            { 
                title, 
                description, 
                imgPath: image 
            }
        );
        const finalData = await headerData.save();
        res.status(201).json(
            { 
                status:201, 
                finalData 
            }
        );
    }catch(error){
        res.status(401).json({ status:401, error });
    };
});

//Header Fetch
router.get("/get-header", async (req, res)=>{
    try {
        const getUser = await Header.find();
        res.status(201).json({
            status: 201,
            getUser
        })
    } catch (error) {
        res.status(401).json({
            status: 401,
            error
        })
    }
})

// delete Header
router.delete("/:id",async(req,res)=>{

    try {
        const {id} = req.params;

        const dltHeader = await Header.findByIdAndDelete({_id:id});

        res.status(201).json({status:201,dltHeader});

    } catch (error) {
        res.status(401).json({status:401,error})
    }

})

// edit header
router.get("/get-header/:id", async (req, res) => {
    try {
      const header = await Header.findById(req.params.id);
      res.status(200).json({ header });
    } catch (error) {
      res.status(400).json({ error: "Error fetching header data" });
    }
  });

// update header
router.put("/:id", upload.single("image"), async (req, res) => {
    try {
      const { title, description } = req.body;
      const header = await Header.findById(req.params.id);
  
      if (req.file) {
        // Delete old image
        const fs = require("fs");
        const oldImagePath = `./public/Home/${header.imgPath}`;
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
        header.imgPath = req.file.filename;
      }
  
      header.title = title;
      header.description = description;
  
      await header.save();
      res.status(200).json({ message: "Header updated successfully" });
    } catch (error) {
      res.status(400).json({ error: "Error updating header" });
    }
  });
  

export default router;