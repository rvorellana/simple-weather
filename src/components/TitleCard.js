import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

const TitleCard = ({ title, children }) => {
  return (
    <Card>
      <CardHeader
        title={
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "text.primary",
            }}
          >
            {title}
          </Typography>
        }
        sx={{
          borderBottom: "1px solid lightgray",
        }}
      />
      <CardContent
        sx={{
          paddingBottom: 0,
          paddingTop: 0,
          marginBottom: 0,
          "&:last-child": {
            paddingBottom: 0,
          },
        }}
      >
        <Box>{children}</Box>
      </CardContent>
    </Card>
  );
};

TitleCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TitleCard;
