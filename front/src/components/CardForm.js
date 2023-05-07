import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography, Box } from "@mui/material";

const CardForm = () => {
  return (
      <Paper elevation={3} className="rounded-lg w-8/12">
        <Box padding={1}>
          <img src="" alt="アイテムの画像" className="card-img" />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            padding={1}
          >
            <Typography variant="subtitle" component="h2" className="font-bold">
              
            </Typography>
            <Box className="rounded-md bg-teal-400">
              <Typography
                variant="body2"
                component="p"
                className="text-white font-bold p-1"
              >
                イベント
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            paddingX={2}
          >
            <Typography variant="subtitle" component="p">
              参加者：
            </Typography>
            <Typography variant="subtitle" component="p">
              出品者：
            </Typography>
          </Box>
        </Box>
      </Paper>
  );
};

export default CardForm;
