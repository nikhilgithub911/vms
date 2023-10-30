// import React from 'react'
// import { Typography, Box, Paper, CardActionArea } from '@mui/material'
// import { useTheme } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';

// const IdCard = () => {
//   return (
// <Card sx={{ display: 'flex', flexDirection:'column' }}>
//   <Box display='flex' flexDirection='row'>
//   <Box sx={{width: 131, maxHeighteight:150}}>
//   <CardMedia
//         component="img"
//         sx={{mt:2,ml: 2, width: 101, height:120, bgcolor:'red' }}
//         image="/static/images/cards/live-from-space.jpg"
//         alt="Live from space album cover"
//       />
//   </Box>
//   <hr style={{height:'100%'}} />
//       <Box sx={{ display: 'flex', flexDirection: 'column', maxHeighteight:'150px', Margin:'0' }}>
//         <CardContent elevation={0} sx={{ flex: '1 0 auto', width:'250px' }}>
//           <Typography component="div" variant="text" fontSize='14px' fontWeight='700'>
//             Visitor's Name:
//           </Typography>
//           <Typography variant="text"  component="div" mb='2%'>
//             Mac Miller
//           </Typography>
//           <Typography component="div" variant="text" fontSize='14px' fontWeight='700'>
//             Contact No:
//           </Typography>
//           <Typography variant="text"  component="div" mb='2%'>
//             9966669900
//           </Typography>
//           <Typography component="div" variant="text" fontSize='14px' fontWeight='700'>
//             Email:
//           </Typography>
//           <Typography variant="text"  component="div">
//             test@demo.com
//           </Typography>
//         </CardContent>
//       </Box>
//   </Box>
//   <hr style={{width:'100%'}} />
//   <Box sx={{ display: 'flex', alignItems: 'center', gap:'23.3%', pt: 1, pl: 1, pr: 1, pb: 1 }}>
//           <Box>
//           <Typography component="div" variant="text" fontSize='14px' fontWeight='700'>
//             Employee's Name:
//           </Typography>
//           <Typography variant="text"  component="div">
//             Ablert Rosee
//           </Typography>
//           </Box>
//           <Box>
//           <Typography component="div" variant="text" fontSize='14px' fontWeight='700'>
//             Meeting ID:
//           </Typography>
//           <Typography variant="text"  component="div">
//             ABC123
//           </Typography>
//           </Box>
//         </Box>

//           <Box sx={{ display: 'flex', alignItems: 'center',  gap:'15%', pl: 1, pb: 1 }}>
//           <Box>
//           <Typography component="div" variant="text" fontSize='14px' fontWeight='700'>
//             Check-In:
//           </Typography>
//           <Typography variant="text"  component="div">
//             09-26-2023 10:00 PM
//           </Typography>
//           </Box>
//           <Box>
//           <Typography component="div" variant="text" fontSize='14px' fontWeight='700'>
//             Check-Out:
//           </Typography>
//           <Typography variant="text"  component="div">
//             09-26-2023 12:38 PM
//           </Typography>
//           </Box>
//         </Box>
//     </Card>
//   )
// }

// export default IdCard




// import React from 'react';
// import { Typography, Box, Card } from '@mui/material';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';

// const IdCard = React.forwardRef((props, ref) => {


//   return (
//     <Card sx={{ display: 'flex', flexDirection: 'column' }} ref={ref}>
//       <Box display="flex" flexDirection="row">
//         <Box sx={{ width: 131, maxHeight: 150 }}>
//           <CardMedia
//             component="img"
//             sx={{ mt: 2, ml: 2, width: 101, height: 120, bgcolor: 'red', zIndex:1 }}
//             // image="/static/images/cards/live-from-space.jpg"
//             image="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_1280.png"
//             alt="Live from space album cover"
//                   />
//         </Box>
//         <hr style={{ height: '130px' }} />
//         <Box sx={{ display: 'flex', flexDirection: 'column', maxHeight: '150px', margin: '0' }}>
//           <CardContent elevation={0} sx={{ flex: '1 0 auto', width: '250px' }}>
//             <Typography component="div" variant="text" fontSize="14px" fontWeight="700">
//               Visitor's Name:
//             </Typography>
//             <Typography variant="text" component="div" mb="2%">
//               Mac Miller
//             </Typography>
//             <Typography component="div" variant="text" fontSize="14px" fontWeight="700">
//               Contact No:
//             </Typography>
//             <Typography variant="text" component="div" mb="2%">
//               9966669900
//             </Typography>
//             <Typography component="div" variant="text" fontSize="14px" fontWeight="700">
//               Email:
//             </Typography>
//             <Typography variant="text" component="div">
//               test@demo.com
//             </Typography>
//           </CardContent>
//         </Box>
//       </Box>
//       <hr style={{ width: '100%' }} />
//       <Box sx={{ display: 'flex', alignItems: 'center', gap: '23.3%', pt: 1, pl: 1, pr: 1, pb: 1 }}>
//         <Box>
//           <Typography component="div" variant="text" fontSize="14px" fontWeight="700">
//             Employee's Name:
//           </Typography>
//           <Typography variant="text" component="div">
//             Ablert Rosee
//           </Typography>
//         </Box>
//         <Box>
//           <Typography component="div" variant="text" fontSize="14px" fontWeight="700">
//             Meeting ID:
//           </Typography>
//           <Typography variant="text" component="div">
//             ABC123
//           </Typography>
//         </Box>
//       </Box>

//       <Box sx={{ display: 'flex', alignItems: 'center', gap: '15%', pl: 1, pb: 1 }}>
//         <Box>
//           <Typography component="div" variant="text" fontSize="14px" fontWeight="700">
//             Check-In:
//           </Typography>
//           <Typography variant="text" component="div">
//             09-26-2023 10:00 PM
//           </Typography>
//         </Box>
//         <Box>
//           <Typography component="div" variant="text" fontSize="14px" fontWeight="700">
//             Check-Out:
//           </Typography>
//           <Typography variant="text" component="div">
//             09-26-2023 12:38 PM
//           </Typography>
//         </Box>
//       </Box>
//     </Card>
//   );
// });

// export default IdCard;





















import React from 'react';
import { Typography, Box, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import IdImage from '../data/IdImage.jpg'

const IdCard = React.forwardRef((props, ref) => {

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column' }} ref={ref}>
      <Box display="flex" flexDirection="row">
        <Box sx={{ width: 131, maxHeight: 150 }}>
          {/* Include the image directly within the CardMedia component */}
          <CardMedia
            component="img"
            sx={{ mt: 2, ml: 2, width: 101, height: 120, bgcolor: 'red', zIndex: 1 }}
            // image={IdImage}
            image="http://192.168.12.54:8080/com/image/ec4b55b7-e3f8-4198-b423-d8e371b501c0.jpg"
            alt="Live from space album cover"
          />
        </Box>
        <hr style={{ height: '130px' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', maxHeight: '150px', margin: '0' }}>
          <CardContent elevation={0} sx={{ flex: '1 0 auto', width: '250px' }}>
            <Typography component="div" variant="text" fontSize="14px" fontWeight="700">
              Visitor's Name:
            </Typography>
            <Typography variant="text" component="div" mb="2%">
              Mac Miller
            </Typography>
            <Typography component="div" variant="text" fontSize="14px" fontWeight="700">
              Contact No:
            </Typography>
            <Typography variant="text" component="div" mb="2%">
              9966669900
            </Typography>
            <Typography component="div" variant="text" fontSize="14px" fontWeight="700">
              Email:
            </Typography>
            <Typography variant="text" component="div">
              test@demo.com
            </Typography>
          </CardContent>
        </Box>
      </Box>
      <hr style={{ width: '100%' }} />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '23.3%', pt: 1, pl: 1, pr: 1, pb: 1 }}>
        <Box>
          <Typography component="div" variant="text" fontSize="14px" fontWeight="700">
            Employee's Name:
          </Typography>
          <Typography variant="text" component="div">
            Ablert Rosee
          </Typography>
        </Box>
        <Box>
          <Typography component="div" variant="text" fontSize="14px" fontWeight="700">
            Meeting ID:
          </Typography>
          <Typography variant="text" component="div">
            ABC123
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: '15%', pl: 1, pb: 1 }}>
        <Box>
          <Typography component="div" variant="text" fontSize="14px" fontWeight="700">
            Check-In:
          </Typography>
          <Typography variant="text" component="div">
            09-26-2023 10:00 PM
          </Typography>
        </Box>
        <Box>
          <Typography component="div" variant="text" fontSize="14px" fontWeight="700">
            Check-Out:
          </Typography>
          <Typography variant="text" component="div">
            09-26-2023 12:38 PM
          </Typography>
        </Box>
      </Box>
    </Card>
  );
});

export default IdCard;
