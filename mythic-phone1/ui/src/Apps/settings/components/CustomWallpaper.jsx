import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Paper, TextField, CircularProgress, Alert } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

import { UpdateSetting } from '../actions';
import { useAlert } from '../../../hooks';
import { Modal } from '../../../components';
import { Wallpapers } from '../../../util/Wallpapers';

const useStyles = makeStyles((theme) => ({
	wrapper: {
        background: '#1e1f24',  // Unified background for all wallpapers
    
        height: '100%',
        userSelect: 'none',
        padding: 10,
        textAlign: 'center',
        borderRadius: 7,  // Rounded corners
        '-webkit-user-select': 'none',
        overflow: 'hidden',  // Ensure the images fit perfectly inside rounded corners
        boxShadow: '0 4px 12px rgba(0,0,0,0.4)',  // Consistent shadow for all wallpapers
        '&:hover': {
            background: '#3A3A3C',  // Slight hover effect for all wallpapers
            borderColor: '#007AFF',
            transition: 'background 0.3s, border-color 0.3s',
            cursor: 'pointer',
        },
	},
	wrapperActive: {
		background: theme.palette.secondary.dark,
		width: '100%',
		height: 'fit-content',
		padding: 10,
		userSelect: 'none',
		border: `2px solid ${theme.palette.primary.main}`,
		textAlign: 'left',
		'-webkit-user-select': 'none',
		'&:hover': {
			background: theme.palette.secondary.light,
			borderColor: theme.palette.secondary.light,
			transition: 'background, border-color ease-in 0.15s',
			cursor: 'pointer',
		},
	},
	img: {
		height: 200,
		width: '100%',
		display: 'block',
	},
	addContainer: {
		height: '90%',
		lineHeight: '200px',
		position: 'relative',
		width: '100%',
		display: 'block',
		backgroundColor: theme.palette.primary.main,
		marginBottom: 7,
	},
	addIcon: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		margin: 'auto',
		fontSize: 35,
	},
	editField: {
		width: '100%',
		marginBottom: 20,
		fontSize: 20,
	},
	buttons: {
		width: '100%',
		display: 'flex',
		margin: 'auto',
	},
	buttonNeg: {
		width: '-webkit-fill-available',
		padding: 20,
		color: theme.palette.error.main,
		'&:hover': {
			backgroundColor: `${theme.palette.error.main}14`,
		},
	},
	buttonPos: {
		width: '-webkit-fill-available',
		padding: 20,
		color: theme.palette.success.main,
		'&:hover': {
			backgroundColor: `${theme.palette.success.main}14`,
		},
	},
	customPH: {
		position: 'relative',
		height: 425,
		width: 250,
		margin: 'auto',
		background: theme.palette.secondary.dark,
		marginBottom: 25,
	},
	customImg: {
		display: 'block',
		height: 425,
		width: 250,
		margin: 'auto',
		marginBottom: 25,
	},
	label: {
        color: '#F2F2F7',  // Light color for the label text
        fontSize: '14px',
        marginTop: '0px',
        fontWeight: 'bold',  // Make text bold like in iOS
    },
}));

export default connect(null, { UpdateSetting })((props) => {
	const showAlert = useAlert();
	const classes = useStyles();
	const settings = useSelector(
		(state) => state.data.data.player.PhoneSettings,
	);

	const isActive = Wallpapers[settings.wallpaper] == null;

	const [open, setOpen] = useState(false);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [val, setVal] = useState(isActive ? settings.wallpaper : '');

	const toggleOpen = (state) => {
		if (!loading || !open) setOpen(state);
	};

	const onChange = (e) => {
		e.preventDefault();
		setVal(e.target.value);
	};

	const onSave = () => {
		setLoading(false);
		toggleOpen(false);
		if (val !== '') {
			props.UpdateSetting('wallpaper', val);
			showAlert('Custom Wallpaper Saved');
		}
	};

	const removeImage = (e) => {
		e.preventDefault();
		toggleOpen(false);
		setVal('');
		props.UpdateSetting('wallpaper', 'wallpaper');
		showAlert('Wallpaper Deleted');
	};

	return (
		<>
			<Paper
				className={isActive ? classes.wrapperActive : classes.wrapper}
				onClick={() => toggleOpen(true)}
			>
				{isActive ? (
					<img
						className={classes.img}
						src={settings.wallpaper}
						alt="Custom Wallpaper"
					/>
				) : (
					<div className={classes.addContainer}>
						<FontAwesomeIcon
							icon={['fas', 'plus']}
							className={classes.addIcon}
						/>
					</div>
				)}
				<div className={classes.label}>
					Custom
				</div>
			</Paper>

			{open ? (
				<Modal
					open={open}
					title="Custom Wallpaper"
					onClose={() => toggleOpen(false)}
					onDelete={isActive ? removeImage : null}
					onAccept={onSave}
					acceptLang="Save"
				>
					{loading ? (
						<div>
							<div className={classes.customPH}>
								<CircularProgress
									size={70}
									className={classes.addIcon}
								/>
							</div>
							<div>Checking Link</div>
						</div>
					) : (
						<div>
							{val != '' ? (
								<img
									className={classes.customImg}
									src={val}
									alt="Custom Wallpaper"
								/>
							) : (
								<div className={classes.customPH}>
									<FontAwesomeIcon
										icon={['fas', 'plus']}
										className={classes.addIcon}
									/>
								</div>
							)}
							{error !== '' ? (
								<Alert
									variant="filled"
									severity="error"
									elevation={6}
									className={classes.error}
								>
									{error}
								</Alert>
							) : null}
							<TextField
								className={classes.editField}
								label="Wallpaper Link"
								name="wallpaper"
								type="text"
								onChange={onChange}
								value={val}
								InputLabelProps={{
									style: { fontSize: 20 },
								}}
							/>
						</div>
					)}
				</Modal>
			) : null}
		</>
	);
});
