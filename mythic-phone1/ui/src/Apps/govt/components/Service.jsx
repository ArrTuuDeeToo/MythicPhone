import React, { useState } from 'react';
import {
	Tooltip,
	IconButton,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CurrencyFormat } from '../../../util/Parser';

const useStyles = makeStyles((theme) => ({}));

export default ({ service, onSelect }) => {
	const classes = useStyles();

	return (
		<>
			<ListItem divider>
				<ListItemText
					primary={service.Label}
					secondary={CurrencyFormat.format(service.Price)}
				/>
				<ListItemSecondaryAction>
					<Tooltip title={`Purchase ${service.Label}`}>
						<IconButton disabled={Boolean(service.Disabled)} onClick={() => onSelect(service)}>
							<FontAwesomeIcon icon={['fas', 'cart-shopping']} />
						</IconButton>
					</Tooltip>
				</ListItemSecondaryAction>
			</ListItem>
		</>
	);
};
