import { Snackbar as MuiSnackBar } from '@mui/material';
import { Alert } from '@mui/material';
import React from 'react';

export const SnackBar = ({ open, handleClose, message, severity }) => {
	return (
		<>
			<MuiSnackBar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
					{message}
				</Alert>
      </MuiSnackBar>
      
		</>
	);
};
