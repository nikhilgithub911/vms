// import React from 'react'
// import { Typography, Box, Paper, CardActionArea } from '@mui/material'
// import { useTheme } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
// // import { Margin } from '@mui/icons-material';
// import PrintIcon from '@mui/icons-material/Print';
// import IdCard from './IdCard';




// const printBadge = () => {
//   window.print();
// };


// const Headers = () => {
//   const theme = useTheme();
  

//   return (
// <Paper elevation={5} sx={{mt:'12em', ml:'10em', mb:'2em', width:'550px', height:'350px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
//     <IdCard />
//     <Box>
//     <IconButton
//         color="primary"
//         onClick={() => printBadge()}
//     >
//       <PrintIcon />
//     </IconButton>
//     </Box>
// </Paper>
//   )
// }

// export default Headers


























// import React from 'react';
// import { Paper, Box, IconButton } from '@mui/material';
// import PrintIcon from '@mui/icons-material/Print';
// import IdCard from './IdCard';
// import Cookies from 'js-cookie';

// const Headers = () => {
//   const IdCardRef = React.useRef();



// //   const printBadge = () => {
// //   import('html2canvas').then((html2canvas) => {
// //     import('jspdf').then((jsPDF) => {
// //       html2canvas.default(IdCardRef.current).then((canvas) => {
// //         const imgData = canvas.toDataURL('image/png');
// //         const pdf = new jsPDF.default('p', 'mm', [90, 90]);
// //         pdf.addImage(imgData, 'PNG', 0, 15, 90, 60);
        
// //         // Generate a data URI for the PDF
// //         const pdfDataUri = pdf.output('datauristring');
        
// //         // Open a new tab with the PDF for printing
// //         const newWindow = window.open();
// //         newWindow.document.open();
// //         newWindow.document.write(`<iframe width='100%' height='100%' src='${pdfDataUri}'></iframe>`);
// //         newWindow.document.close();
// //       });
// //     });
// //   });
// // };


// // const printBadge = () => {
// //   import('html2canvas').then((html2canvas) => {
// //     import('jspdf').then((jsPDF) => {
// //       const cardElement = IdCardRef.current;

// //       // Wait for the image to load
// //       const images = cardElement.querySelectorAll('img');
// //       const promises = [];
// //       images.forEach((img) => {
// //         promises.push(
// //           new Promise((resolve, reject) => {
// //             if (img.complete) {
// //               resolve();
// //             } else {
// //               img.onload = resolve;
// //               img.onerror = reject;
// //             }
// //           })
// //         );
// //       });

// //       Promise.all(promises)
// //         .then(() => {
// //           html2canvas.default(cardElement).then((canvas) => {
// //             const imgData = canvas.toDataURL('image/png');
// //             const pdf = new jsPDF.default('p', 'mm', [90, 90]);
// //             pdf.addImage(imgData, 'PNG', 0, 15, 90, 60);

// //             // Generate a data URI for the PDF
// //             const pdfDataUri = pdf.output('datauristring');

// //             // Open a new tab with the PDF for printing
// //             const newWindow = window.open();
// //             newWindow.document.open();
// //             newWindow.document.write(`<iframe width='100%' height='100%' src='${pdfDataUri}'></iframe>`);
// //             newWindow.document.close();
// //           });
// //         })
// //         .catch((error) => {
// //           console.error('Error loading images:', error);
// //         });
// //     });
// //   });
// // };

//   return (
//     <Paper
//       elevation={5}
//       sx={{
//         mt: '12em',
//         ml: '10em',
//         mb: '2em',
//         width: '550px',
//         height: '350px',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Box ref={IdCardRef}>
//       <IdCard printBadge={printBadge}  />
//       </Box>
//       <Box>
//         <IconButton color="primary" onClick={() => printBadge()}>
//           <PrintIcon />
//         </IconButton>
//       </Box>
//     </Paper>
//   );
// };

// export default Headers;























// import React, { useState } from 'react';
// import { Paper, Box, IconButton, Modal } from '@mui/material';
// import PrintIcon from '@mui/icons-material/Print';
// import IdCard from './IdCard';
// import Cookies from 'js-cookie';
// import html2canvas from 'html2canvas'; // Import html2canvas library
// import jsPDF from 'jspdf'; // Import jspdf library

// const Headers = () => {
//   const IdCardRef = React.useRef();
//   const [isCardModalOpen, setCardModalOpen] = useState(false);

//   const openCardModal = () => {
//     setCardModalOpen(true);
//   };

//   const closeCardModal = () => {
//     setCardModalOpen(false);
//   };

//   const printBadge = () => {
//     openCardModal();
//   };

//   const printModalContent = () => {
//     // Capture the modal content as an image using html2canvas
//     const modalContent = document.getElementById('modal-content');

//     html2canvas(modalContent).then((canvas) => {
//       // Convert the canvas to an image data URL
//       const imgData = canvas.toDataURL('image/png');

//       // Create a PDF document and add the image to it
//        const pdf = new jsPDF.default('p', 'mm', [90, 90]);
//        pdf.addImage(imgData, 'PNG', 0, 15, 90, 60);

//       // Download or print the PDF
//       pdf.save('modal_content.pdf'); // To download the PDF
//       // You can also use pdf.autoPrint() to print the PDF directly, but it may require user interaction depending on browser settings.
//     });
//   };

//   return (
//     <Paper
//       elevation={5}
//       sx={{
//         mt: '12em',
//         ml: '10em',
//         mb: '2em',
//         width: '550px',
//         height: '350px',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Box ref={IdCardRef}>
//         <IdCard />
//       </Box>
//       <Box>
//         <IconButton color="primary" onClick={() => printBadge()}>
//           <PrintIcon />
//         </IconButton>
//       </Box>

//       {/* Modal to display the card */}
//       <Modal
//         open={isCardModalOpen}
//         onClose={closeCardModal}
//         aria-labelledby="card-modal-title"
//         aria-describedby="card-modal-description"
//       >
//         <Box
//           id="modal-content" // Add an ID to the modal content for capturing
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//           }}
//         >
//           <IdCard />
//         </Box>
//       </Modal>

//     </Paper>
//   );
// };

// export default Headers;

























// import React, { useState } from 'react';
// import { Paper, Box, IconButton, Modal, Button } from '@mui/material';
// import PrintIcon from '@mui/icons-material/Print';
// import IdCard from './IdCard';
// import html2canvas from 'html2canvas'; // Import html2canvas library
// import jsPDF from 'jspdf'; // Import jspdf library

// const Headers = () => {
//   const IdCardRef = React.useRef();
//   const [isCardModalOpen, setCardModalOpen] = useState(false);

//   const openCardModal = () => {
//     setCardModalOpen(true);
//   };

//   const closeCardModal = () => {
//     setCardModalOpen(false);
//   };

//   const printBadge = () => {
//     openCardModal();
//   };

//   const printModalContent = () => {
//     // Capture the modal content as an image using html2canvas
//     const modalContent = document.getElementById('modal-content');

//     // Hide the print button before capturing
//     const printButton = document.getElementById('print-button');
//     printButton.style.display = 'none';

//     html2canvas(modalContent).then((canvas) => {
//       // Convert the canvas to an image data URL
//       const imgData = canvas.toDataURL('image/png/jpeg/jpg');

//       // Create a PDF document and add the image to it
//       const pdf = new jsPDF('p', 'mm', [90, 90]);
//       pdf.addImage(imgData, 'PNG', 0, 15, 90, 60);

//       // Show the print button again
//       printButton.style.display = 'block';

//       // Automatically print the PDF
//       pdf.autoPrint();

//       // Save the PDF (optional)
//       pdf.save('modal_content.pdf'); // To download the PDF
//     });
//   };

//   return (
//     <Paper
//       elevation={5}
//       sx={{
//         mt: '12em',
//         ml: '10em',
//         mb: '2em',
//         width: '550px',
//         height: '350px',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Box ref={IdCardRef}>
//         <IdCard />
//       </Box>
//       <Box>
//         <IconButton color="primary" onClick={printBadge}>
//           <PrintIcon />
//         </IconButton>
//       </Box>

//       {/* Modal to display the card */}
//       <Modal
//         open={isCardModalOpen}
//         onClose={closeCardModal}
//         aria-labelledby="card-modal-title"
//         aria-describedby="card-modal-description"
//       >
//         <Box
//           id="modal-content" // Add an ID to the modal content for capturing
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//           }}
//         >
//           <IdCard />
//           <Button
//             id="print-button"
//             variant="contained"
//             color="primary"
//             onClick={printModalContent}
//             sx={{
//               position: 'absolute',
//               bottom: '1em',
//               right: '1em',
//               visibility: 'visible', // Initially visible
//             }}
//           >
//             Print
//           </Button>
//         </Box>
//       </Modal>
//     </Paper>
//   );
// };

// export default Headers;




















import React, { useRef } from 'react';
import { Paper, Box, IconButton, Modal, Button } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import IdCard from './IdCard';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Headers = () => {
  const IdCardRef = useRef();
  const [isCardModalOpen, setCardModalOpen] = React.useState(false);

  const openCardModal = () => {
    setCardModalOpen(true);
  };

  const closeCardModal = () => {
    setCardModalOpen(false);
  };

  const printBadge = () => {
    openCardModal();
  };

  const printModalContent = () => {
    const cardElement = IdCardRef.current;

    // Capture the modal content as an image using html2canvas
    html2canvas(cardElement).then((canvas) => {
      // Convert the canvas to an image data URL
      const imgData = canvas.toDataURL('image/jpeg', 1.0);

      // Create a new jsPDF instance
      const pdf = new jsPDF('p', 'mm', [90, 90]);

      // Add the image to the PDF
      pdf.addImage(imgData, 'JPEG', 0, 0, 90, 60);

      // Open the PDF in a new tab
      const pdfBlob = pdf.output('blob');
      const pdfURL = URL.createObjectURL(pdfBlob);
      window.open(pdfURL, '_blank');

      // Clean up
      URL.revokeObjectURL(pdfURL);
    });
  };

  return (
    <Paper
      elevation={5}
      sx={{
        mt: '12em',
        ml: '10em',
        mb: '2em',
        width: '550px',
        height: '350px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box ref={IdCardRef}>
        <IdCard />
      </Box>
      <Box>
        <IconButton color="primary" onClick={printBadge}>
          <PrintIcon />
        </IconButton>
      </Box>

      {/* Modal to display the card */}
      <Modal
        open={isCardModalOpen}
        onClose={closeCardModal}
        aria-labelledby="card-modal-title"
        aria-describedby="card-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Render the IdCard component within the modal */}
          <IdCard />
          <Button
            variant="contained"
            color="primary"
            onClick={printModalContent}
            sx={{
              position: 'absolute',
              bottom: '1em',
              right: '1em',
              visibility: 'visible',
            }}
          >
            Print
          </Button>
        </Box>
      </Modal>
    </Paper>
  );
};

export default Headers;




















// import React, { useRef } from 'react';
// import { Paper, Box, IconButton } from '@mui/material';
// import PrintIcon from '@mui/icons-material/Print';
// import IdCard from './IdCard';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const Headers = () => {
//   const IdCardRef = useRef();

//   const printBadge = () => {
//     const cardElement = IdCardRef.current;

//     // Capture the card content as an image using html2canvas
//     html2canvas(cardElement).then((canvas) => {
//       // Convert the canvas to an image data URL
//       const imgData = canvas.toDataURL('image/jpeg', 1.0);

//       // Create a new jsPDF instance
//       const pdf = new jsPDF('p', 'mm', [90, 90]);

//       // Add the image to the PDF
//       pdf.addImage(imgData, 'JPEG', 0, 0, 90, 60);

//       // Open the PDF in a new tab
//       const pdfBlob = pdf.output('blob');
//       const pdfURL = URL.createObjectURL(pdfBlob);
//       window.open(pdfURL, '_blank');

//       // Clean up
//       URL.revokeObjectURL(pdfURL);
//     });
//   };

//   return (
//     <Paper
//       elevation={5}
//       sx={{
//         mt: '12em',
//         ml: '10em',
//         mb: '2em',
//         width: '550px',
//         height: '350px',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Box ref={IdCardRef}>
//         <IdCard />
//       </Box>
//       <Box>
//         <IconButton color="primary" onClick={printBadge}>
//           <PrintIcon />
//         </IconButton>
//       </Box>
//     </Paper>
//   );
// };

// export default Headers;
