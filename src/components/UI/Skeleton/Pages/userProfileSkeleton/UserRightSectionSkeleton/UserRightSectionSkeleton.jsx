import {Box, Skeleton} from "@mui/material";
import {styles} from './UserRightSectionSkeleton.styles';
import React from "react";

const UserRightSectionSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.titleBox}>
        <Skeleton variant='rounded' width='100%' height={32}/>
      </Box>
      <Skeleton sx={styles.contacts} variant='rounded' height={50}/>
      <Box sx={styles.titleBox}>
        <Skeleton variant='rounded' width='100%' height={32}/>
      </Box>
      <Skeleton sx={styles.contacts} variant='rounded' height={120}/>
      <Skeleton sx={styles.title} variant='rounded' height={32}/>
      <Skeleton variant='rounded' height={196}/>
    </Box>
  )
}

export default UserRightSectionSkeleton;