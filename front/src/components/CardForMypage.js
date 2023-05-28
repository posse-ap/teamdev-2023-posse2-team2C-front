import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "./LikeButton.js";
import { Typography, Box, Link } from "@mui/material";

const Card = ({ event }) => {
  const item_url = event.is_item ? `mypage/rentalItems/${event.id}` : null;
  return (
    <Grid item xs={4}>
      <Link href={item_url} className="hover:no-underline no-underline">
        <Paper elevation={3} className="rounded-lg">
          <Box padding={1} className="relative">
            <img
              src={event.image_url}
              alt="アイテムの画像"
              className="card-img"
            />
            <Box className="rounded-md bg-red-500 absolute top-5 left-5">
              <Typography
                variant="body2"
                component="p"
                className="text-white font-extrabold p-2"
              >
                {event.rental_day}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              padding={1}
            >
              <Typography
                variant="subtitle"
                component="h2"
                className="font-bold"
              >
                {event.name}
              </Typography>
              {event.is_item ? (
                <Box className="rounded-md bg-blue-100">
                  <Typography
                    variant="body2"
                    component="p"
                    className="text-teal-400 font-extrabold p-2"
                  >
                    {event.price}pt
                  </Typography>
                </Box>
              ) : (
                <Box className="rounded-md bg-teal-400">
                  <Typography
                    variant="body2"
                    component="p"
                    className="text-white font-bold p-2"
                  >
                    イベント
                  </Typography>
                </Box>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              paddingX={1}
            >
              {event.is_item ? (
                <Box
                  style={{ padding: 0 }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FavoriteIcon></FavoriteIcon>
                  <Typography variant="subtitle" component="p">
                    {event.likes}
                  </Typography>
                </Box>
              ) : (
                <Typography variant="subtitle" component="p">
                  参加者：{event.participants}人
                </Typography>
              )}
              <Typography variant="subtitle" component="p">
                {event.owner}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Link>
    </Grid>
  );
};

export default Card;
