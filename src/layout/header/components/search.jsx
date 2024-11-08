import { Box, IconButton, TextField } from "@mui/material";
import { IconSearch } from "../../../assets/icon/icon_search";
export const SearchInput = ({ onChange }) => {
    return (
        <Box display={'flex'} justifyContent={'space-between'}>
            <TextField style={{
                width: '317px'
            }} />
            <Box
                sx={{
                    bgcolor: "#fb2e86",
                    width: "40px",
                    height: "56px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft:'-2px'
                }}>

                <IconSearch
                    style={{
                        width: "24px",
                        height: "24px",
                    }} />
            </Box>
        </Box>
    );
};
