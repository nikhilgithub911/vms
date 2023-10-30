import { Table, TableBody, TableContainer, TableHead, Tooltip } from "@mui/material"
import { StyledTableCell2, StyledTableRow, TableHeaderColor } from "../Styles/styles"
import VisibilityIcon from "@mui/icons-material/Visibility";
import PrintIcon from "@mui/icons-material/Print";
import HistoryIcon from "@mui/icons-material/History";
import NOT_FOUND_IMAGE from "../../Images/Not_Found_info.svg";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


export const GateEntriesTable = ({ tableHeader, data, pageNo, rowsPerPage }) => {
    const [showEmptyImg,setShowEmptyImg]=useState(false)
    const navigate = useNavigate();

    // AUTH DATA AND OTHER INFORMATION
const authData = useSelector((state) => state.rootReducer.data);
useEffect(()=>{
    setTimeout(() => {
      if(data.length===0) setShowEmptyImg(true)
    }, 2000);
  },[])
    return (
        <TableContainer style={{ height: "500px" }}>
            <Table sx={{ minWidth: 650 }} size="small" stickyHeader aria-label="sticky table">
                <TableHead>
                    <StyledTableRow>
                        {tableHeader?.map((column) => (
                            <StyledTableCell2
                                key={column?.key}
                                align={column?.align}
                                style={{ ...TableHeaderColor, minWidth: column?.minWidth }}
                            >
                                {column?.title}
                            </StyledTableCell2>
                        ))}
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {data.length > 0 ? data && data.map((row, index) => (
                        <StyledTableRow hover key={index}>
                            <StyledTableCell2>
                                {pageNo === 1
                                    ? index + 1
                                    : rowsPerPage * (pageNo - 1) + index + 1}
                            </StyledTableCell2>
                            <StyledTableCell2
                                sx={{
                                    color: "#1976d2 !important",
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                }}
                                onClick={() =>
                                    navigate("/AddAndUpdateGateEntries", { state: row?.id })
                                }
                            >
                                {row?.mrnGateEntryNumber}
                            </StyledTableCell2>
                            {/* <StyledTableCell2>{row?.type}</StyledTableCell2> */}
                            <StyledTableCell2>{row?.poNumber}</StyledTableCell2>
                            {/* <StyledTableCell2>{row?.department}</StyledTableCell2> */}
                            <StyledTableCell2> {moment(row?.inwardDate).format(authData?.DateFormat)}</StyledTableCell2>
                            <StyledTableCell2>{row?.transporterResponseWithMinimumField?.name ? row?.transporterResponseWithMinimumField?.name : 'N/A'}</StyledTableCell2>
                            <StyledTableCell2>{row?.suppliersResponse?.name ? row?.suppliersResponse?.name : 'N/A'}</StyledTableCell2>
                            {/* <StyledTableCell2>{row?.entryBy}</StyledTableCell2> */}
                            <StyledTableCell2>
                                {/* <Tooltip title={"View / Edit"}>
                                    <VisibilityIcon
                                        sx={{ cursor: "pointer" }}
                                        onClick={() =>
                                            navigate("/AddAndUpdateGateEntries", { state: row?.id })
                                        }
                                    />
                                </Tooltip> */}
                                &nbsp;&nbsp;
                                {/* <Tooltip title={"History"}>
                                    <HistoryIcon
                                        sx={{ cursor: "pointer" }}
                                    />
                                </Tooltip>
                                &nbsp;&nbsp; */}
                                <Tooltip title={"Print"}>
                                    <PrintIcon sx={{ cursor: "pointer" }} onClick={()=>navigate("/gateEntriesPrintPage",{state:{id:row?.id}})} />
                                </Tooltip>
                            </StyledTableCell2>
                        </StyledTableRow>
                    )) :
                        (
                            <StyledTableRow hover>
                                <StyledTableCell2
                                    //   style={commonStyleBodyCell}
                                    colSpan={12}
                                    sx={{ textAlign: "center" }}
                                >
                                    {/* No Data Found */}
                                    {showEmptyImg?<img src={NOT_FOUND_IMAGE} style={{ height: '450px', backgroundSize: 'cover', }} />:null}
                                    {/* <Typography sx={{textAlign: 'center', fontSize: '28px', fontWeight: '300'}}> No Data Found</Typography> */}
                                </StyledTableCell2>
                            </StyledTableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}