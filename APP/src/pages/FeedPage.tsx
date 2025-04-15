import { Typography } from "@mui/material";

const FeedPage = () => (
  <>
    <Typography variant="h4" component="h1" gutterBottom>
      Citizen Feed (Placeholder)
    </Typography>
    {/* Add lots of content to enable scrolling */}
    {[...Array(30)].map((_, i) => (
      <Typography key={i} variant="body1" paragraph>
        This is placeholder content for scrolling. Line {i + 1}.
      </Typography>
    ))}
  </>
);

export default FeedPage;
