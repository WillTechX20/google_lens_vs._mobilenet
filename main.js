var mobilenetResultStrs=["Plunger and Plumber's Helper", 'Medicine Chest and Medicine Cabinet', 'Switch, Electric Switch, and Electrical Switch', 'Medicine Chest and Medicine Cabinet', 'Binder and Ring-Binder', 'Medicine Chest and Medicine Cabinet', 'Medicine Chest and Medicine Cabinet', 'Washbaisn, Handbasin, Washbowl, Lavabol, and Wash-Hand Basin', 'Medicine Chest and Medicine Cabinet', 'Siamese Cat and Siamese'];
var mobilenetResultAccuracyNums=[0.04, 0.071, 0.164, 0.21, 0.087, 0.071, 0.249, 0.132, 0.18, 0.043];
var googleLensResultStrs=['Sharpie Fine Permanent Marker', 'Mr. Pen Handheld Manual Pencil Sharpener With 2 Sharpening Holes', 
'Texas Instruments TI-30X IIS', 'Numbers', 'Blue Item', 'Rock', 'Pencil', 'Paper Airplane', 'Stick', 'Red Item'];
var testImgSrcStrs=['images/black_fat_sharpie.jpg', 'images/black_pencil_sharpener.jpg', 'images/black_scientific_calculator.jpg', 'images/blue_metal_foot-long_ruler.jpg', 
'images/blue_science_folder.jpg', 'images/colored_rock.jpg', 'images/dark_green_crayola_colored_pencil.jpg', 'images/paper_frog.jpg', 
'images/pink_thin_crayola_marker.jpg', 'images/red_pen.jpg'];
var testImgNameStrs=['Black Fat Sharpie', 'Black Pencil Sharpener', 'Black Scientific Calculator', 'Blue Metal Foot-Long Ruler', 'Blue Science Folder', 'Colored Rock', 'Dark Green Crayola Colored Pencil', 'Paper Frog', 'Pink Thin Crayola Marker', 'Red Pen'];
var i=0;

function prevItem(){
    i=i-1;

    if(i<0){
        i=9;
    }

    document.querySelector('.mobilenet_result').innerText='Mobilenet Result: '+mobilenetResultStrs[i];
    document.querySelector('.mobilenet_result_accuracy').innerText='Accuracy: '+mobilenetResultAccuracyNums[i];
    document.querySelector('.google_lens_result').innerText='Google Lens Result: '+googleLensResultStrs[i];
    document.querySelector('img').src=testImgSrcStrs[i];
    document.querySelector('img').alt=testImgNameStrs[i];
    document.querySelector('.test_img_name').innerText=testImgNameStrs[i];
}

function nextItem(){
    i=i+1;

    if(i>9){
        i=0;
    }

    document.querySelector('.mobilenet_result').innerText='Mobilenet Result: '+mobilenetResultStrs[i];
    document.querySelector('.mobilenet_result_accuracy').innerText='Accuracy: '+mobilenetResultAccuracyNums[i];
    document.querySelector('.google_lens_result').innerText='Google Lens Result: '+googleLensResultStrs[i];
    document.querySelector('img').src=testImgSrcStrs[i];
    document.querySelector('img').alt=testImgNameStrs[i];
    document.querySelector('.test_img_name').innerText=testImgNameStrs[i];
}