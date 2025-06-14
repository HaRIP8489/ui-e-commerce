import React, {useRef, useState} from 'react';
import Header from "../../components/Header"
import camera from "../../assets/images/Camera.png";
import cam1 from "../../assets/images/cam1.jpg";
import {Box, Button, TextField, Typography} from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CardCategories    from "../../common/CardCategories";
import Canon from "../../assets/images/canon.webp";
import Nikon from "../../assets/images/nikon.png";
import Sony from "../../assets/images/sony.png";
import Fujifilm from "../../assets/images/fujifilm.jpg";
import Panasonic from "../../assets/images/panasonic.jpg";
import Olympus from "../../assets/images/olympus.jpg";
import Leica from "../../assets/images/leica.png";
import PhaseOne from "../../assets/images/phaseone.jpg";
import Footer from "../../components/Footer";
import CardProduct from "../../common/CardProduct";

const categories1 = [
    { image: Canon, title: "Canon", url: "Canon" },
    { image: Nikon, title: "Nikon", url: "Nikon" },
    { image: Sony, title: " Sony", url: " Sony" },
    { image: Fujifilm, title: "Fujifilm", url: "Fujifilm" },
]

const categories2 = [
    { image: Panasonic, title: "Panasonic", url: "Panasonic" },
    { image: Olympus, title: "Olympus", url: "Olympus" },
    { image: Leica, title: "Leica", url: "Leica" },
    { image: PhaseOne, title: "PhaseOne", url: "PhaseOne" },
]

const product = { image: cam1, title: "X-S20", price: "1.500.000", discount: "10%", priceDiscount: "1.350.000", quantitySold: "107" }

const HomePage: React.FC = () => {
    return (
        <Box sx={{ px: 5, py: 3, backgroundColor: '#D0D5DD' }}>
            {/* Header */}
            <Box className="shadow rounded-3">
                <Header />
            </Box>
            {/* Banner */}
            <Box className="m-3 ">
                <Box component="img" src={camera} alt="Banner" sx={{width: '100%', height: '500px', objectFit: 'cover', display: 'block',}}/>
            </Box>
            {/*register form*/}
            <Box sx={{ maxWidth: '66.6666%', mx: 'auto', display: 'flex' }}>
                {/*leftform*/}
                <Box sx={{ width: '37.5%', bgcolor: '#0070f3', borderRadius: 2 }}>
                    <Typography color="white" align="center" variant="h5" fontWeight="bold" sx={{ p: 2 }} >Ghi lại khoảnh khắc của bạn</Typography>
                    <Box sx={{ px: 2, pb: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField fullWidth variant="outlined" label="Nơi nhận máy ảnh" placeholder="Cơ sở" InputLabelProps={{ shrink: true }}
                                   sx={{'& .MuiInputLabel-root': {color: 'white',}, '& .MuiInputLabel-root.Mui-focused': {color: 'white',}, '& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'white',}, '&:hover fieldset': {borderColor: 'white',}, '&.Mui-focused fieldset': {borderColor: 'white',},}, input: {color: 'white',},}}/>
                        <TextField fullWidth variant="outlined" label="Nơi trả máy ảnh" placeholder="Cơ sở" InputLabelProps={{ shrink: true }}
                                   sx={{'& .MuiInputLabel-root': {color: 'white',}, '& .MuiInputLabel-root.Mui-focused': {color: 'white',}, '& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'white',}, '&:hover fieldset': {borderColor: 'white',}, '&.Mui-focused fieldset': {borderColor: 'white',},}, input: {color: 'white',},}}/>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <TextField fullWidth variant="outlined" label="Ngày thuê" placeholder="Ngày" InputLabelProps={{ shrink: true }}
                                       sx={{'& .MuiInputLabel-root': {color: 'white',}, '& .MuiInputLabel-root.Mui-focused': {color: 'white',}, '& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'white',}, '&:hover fieldset': {borderColor: 'white',}, '&.Mui-focused fieldset': {borderColor: 'white',},}, input: {color: 'white',},}}/>
                            <TextField fullWidth variant="outlined" label="Ngày trả" placeholder="Ngày" InputLabelProps={{ shrink: true }}
                                       sx={{'& .MuiInputLabel-root': {color: 'white',}, '& .MuiInputLabel-root.Mui-focused': {color: 'white',}, '& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'white',}, '&:hover fieldset': {borderColor: 'white',}, '&.Mui-focused fieldset': {borderColor: 'white',},}, input: {color: 'white',},}}/>
                        </Box>
                        <TextField fullWidth variant="outlined" label="Thời gian nhận hàng" placeholder="Thời gian" InputLabelProps={{ shrink: true }}
                                   sx={{'& .MuiInputLabel-root': {color: 'white',}, '& .MuiInputLabel-root.Mui-focused': {color: 'white',}, '& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'white',}, '&:hover fieldset': {borderColor: 'white',}, '&.Mui-focused fieldset': {borderColor: 'white',},}, input: {color: 'white',},}}/>
                        <Button variant="contained" size="large" fullWidth
                                sx={{ mb: 2,  color: "#0070f3", backgroundColor: "white", "&:hover": { color: "white", backgroundColor: "black" } }}>
                            Thuê máy ảnh ngay
                        </Button>
                    </Box>
                </Box>
                {/*rightform*/}
                <Box sx={{ width: '62.5%', bgcolor: 'white', borderRadius: 2, my: 5 }}>
                    <Box sx={{py:3, px:3, height: '100%'}} className=" d-flex flex-column justify-content-between">
                        {/*element1*/}
                        <Typography color="black" variant="h4" fontWeight="bold">
                            Cách thuê máy ảnh tốt nhất
                        </Typography>
                        {/*element2*/}
                        <Box className="d-flex justify-content-between ">
                            <Box className="d-flex flex-column align-items-center">
                                <LocationOnIcon fontSize="inherit" sx={{ color: '#0070f3', fontSize: 80 }} />
                                <Typography fontWeight="bold" align="center">
                                    Chọn của hàng<br />nhận máy
                                </Typography>
                            </Box>
                            <Box className="d-flex flex-column align-items-center">
                                <HandshakeIcon fontSize="inherit" sx={{ color: '#0070f3', fontSize: 80 }} />
                                <Typography fontWeight="bold" align="center">
                                    Chọn máy ảnh<br />phù hợp nhất
                                </Typography>
                            </Box>
                            <Box className="d-flex flex-column align-items-center">
                                <CameraAltIcon fontSize="inherit" sx={{ color: '#0070f3', fontSize: 80 }} />
                                <Typography fontWeight="bold" align="center">
                                    Đặt trước máy<br />ảnh
                                </Typography>
                            </Box>
                        </Box>
                        {/*element2*/}
                        <Button variant="contained" size="large" fullWidth
                                sx={{ mb: 2,  color: "white", backgroundColor: "#0070f3", "&:hover": { color: "white", backgroundColor: "black" } }}>
                            Thuê máy ảnh ngay
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center'}}>
                <Typography variant="subtitle1" className="fs-3 fw-bold">Các thương hiệu máy ảnh</Typography>
            </Box>
            {/*list cart*/}
            <Box className="d-flex justify-content-around align-items-center my-5 flex-wrap">
                {categories1.map((category, index) => (
                    <CardCategories
                        key={index}
                        image={category.image}
                        title={category.title}
                        url={category.url}
                    />
                ))}
            </Box>
            <Box className="d-flex justify-content-around align-items-center my-5 flex-wrap">
                {categories2.map((category, index) => (
                    <CardCategories
                        key={index}
                        image={category.image}
                        title={category.title}
                        url={category.url}
                    />
                ))}
            </Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center'}}>
                <Typography variant="subtitle1" className="fs-3 fw-bold">Một số máy ảnh nổi bật</Typography>
            </Box>
            <Box className="p-4 row justify-content-between gap-5">
                <CardProduct product={product} />
                <CardProduct product={product} />
                <CardProduct product={product} />
                <CardProduct product={product} />
                <CardProduct product={product} />
                <CardProduct product={product} />
                <CardProduct product={product} />
                <CardProduct product={product} />
            </Box>

            {/*Footer*/}
            <Footer />
        </Box>
    );
};

export default HomePage;

