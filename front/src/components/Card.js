import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography, Box } from "@mui/material";

const Card = ({ event }) => {
  return (
    <Grid item xs={4}>
      <Paper elevation={3} className="rounded-lg">
        <Box padding={1}>
          <img
            src={event.image}
            alt="アイテムの画像"
            className="card-img"
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            padding={1}
          >
            <Typography variant="subtitle" component="h2" className="font-bold">
              {event.name}
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
            参加者：{event.participants}
            </Typography>
            <Typography variant="subtitle" component="p">
              出品者：{event.owner_id}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Card;
