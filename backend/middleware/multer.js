import multer from 'multer';

const storage = multer.diskStorage({
    filename:function(req, file, callback){
        callback(null, file.originalname)
    }
})

const upload = multer({storage})
export default upload


// import multer from 'multer';

// const storage = multer.diskStorage({
//     // ⬇️ ADD THIS DESTINATION FUNCTION
//     destination: function (req, file, callback) {
//         // The 'uploads/' folder must exist
//         callback(null, 'uploads/'); 
//     },
//     filename: function (req, file, callback) {
//         // Using Date.now() prevents conflicts if two files have the same name
//         callback(null, `${Date.now()}-${file.originalname}`);
//     }
// });

// const upload = multer({ storage: storage });
// export default upload;
