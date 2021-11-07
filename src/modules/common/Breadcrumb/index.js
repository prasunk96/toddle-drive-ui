import React, { useEffect, useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import arrowNext from '../../../assets/icons/arrowNext.svg';

export default function CustomBreadcrumb({ breadcrumb, handlLinkClicked }) {

  const [breadcrumbsList, setBreadcrumbsList] = useState([]);

  useEffect(() => {

    const handleBreadcrumbClicked = (item) => {
      handlLinkClicked(item);
    };

    const breadcrumArray = breadcrumb.map((item, index) => {
      let value = null;
      if (index === breadcrumb.length - 1) {
        value = <Typography variant="h6" key={index} fontSize={14} color="var(--text-color-primary)">
          {item}
        </Typography>
      } else {
        value = <Link underline="hover" variant="h6" key={index} fontSize={14} color="var(--text-color-heading-secondary)" onClick={() => handleBreadcrumbClicked(item)}>
          {item}
        </Link>
      }
      return value;
    });

    setBreadcrumbsList(breadcrumArray);

  }, [breadcrumb]);

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<img src={arrowNext} alt="breadcrumArrow" />}
        aria-label="breadcrumb"
      >
        {breadcrumbsList}
      </Breadcrumbs>
    </Stack>
  );
}
