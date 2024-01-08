import React from 'react';
import {
  useTheme,
  Box,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { InformationCardProps } from './types';

const InformationCard = ({
  content,
  title,
  image,
  reverse = false,
}: InformationCardProps) => {
  const theme = useTheme();
  return (
    <Box width="70%" mx="auto">
      <Card
        sx={{
          backgroundColor: 'transparent',
          display: 'flex', // Added for flex layout
        }}
      >
        <Grid container>
          {!reverse ? (
            <>
              {' '}
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <CardHeader
                  title={title}
                  titleTypographyProps={{
                    color: theme.palette.primary.contrastText,
                    fontWeight: 500,
                  }}
                />
                <CardContent>
                  <Typography
                    variant="body1"
                    color={theme.palette.primary.contrastText}
                  >
                    {content}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  image={image}
                  title="Picture"
                  alt="pic"
                  sx={{
                    maxWidth: 500,
                  }}
                />
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  image={image}
                  title="Picture"
                  alt="pic"
                  sx={{
                    maxWidth: 500,
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <CardHeader
                  title={title}
                  titleTypographyProps={{
                    color: theme.palette.primary.contrastText,
                    fontWeight: 500,
                  }}
                />
                <CardContent>
                  <Typography
                    variant="body1"
                    color={theme.palette.primary.contrastText}
                  >
                    {content}
                  </Typography>
                </CardContent>
              </Grid>
            </>
          )}
        </Grid>
      </Card>
    </Box>
  );
};

export default InformationCard;
