import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Grid, IconButton, Zoom, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: 'fit-content',
        borderRadius: '12px',
        marginBottom: '16px',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            '& $chevronIcon': {
                transform: 'translateX(2px)',
            }
        }
    },
    header: {
        width: '100%',
        padding: '16px',
        minHeight: '60px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        fontSize: '1.25rem',
        fontWeight: 600,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    body: {
        padding: '16px',
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    countText: {
        fontSize: '1rem',
        fontWeight: 500,
        color: 'rgba(255,255,255,0.9)',
    },
    emptyText: {
        fontSize: '1rem',
        color: 'rgba(255,255,255,0.7)',
        fontStyle: 'italic',
    },
    btn: {
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0.1)',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.2)',
        }
    },
    chevronIcon: {
        transition: 'transform 0.3s ease',
    },
    categoryIcon: {
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: '6px',
        marginRight: '8px',
    }
}));

const CategoryCard = ({ category }) => {
    const classes = useStyles();
    const history = useHistory();
    const adObjs = useSelector((state) => state.data.data.adverts);

    const adverts = Object.keys(adObjs || {})
        .filter(a => a !== '0')
        .filter((ad) => {
            return adObjs[ad].categories.includes(category.label);
        });

    const onClick = () => {
        history.push(`/apps/adverts/category-view/${category.label}`);
    };

    const getCategoryIcon = (label) => {
        switch(label) {
            case 'Services':
                return 'briefcase';
            case 'Want-To-Buy':
                return 'shopping-cart';
            case 'Want-To-Sell':
                return 'tag';
            case 'Help Wanted':
                return 'users';
            default:
                return 'folder';
        }
    };

    return (
        <Zoom in={true} timeout={500}>
            <Paper 
                className={classes.wrapper}
                style={{ 
                    backgroundColor: category.color,
                    cursor: 'pointer' 
                }}
                onClick={onClick}
            >
                <div className={classes.header}>
                    <div className={classes.title}>
                        <div className={classes.categoryIcon}>
                            <FontAwesomeIcon 
                                icon={['fas', getCategoryIcon(category.label)]} 
                                size="sm"
                            />
                        </div>
                        {category.label}
                    </div>
                </div>

                <div className={classes.body}>
                    <Grid container alignItems="center">
                        <Grid item xs={10}>
                            {adverts.length > 0 ? (
                                <div className={classes.countText}>
                                    {`${adverts.length} ${
                                        adverts.length === 1 
                                            ? 'Advertisement' 
                                            : 'Advertisements'
                                    }`}
                                </div>
                            ) : (
                                <div className={classes.emptyText}>
                                    No Advertisements
                                </div>
                            )}
                        </Grid>
                        <Grid item xs={2} style={{ textAlign: 'right' }}>
                            <IconButton className={classes.btn} size="small">
                                <FontAwesomeIcon 
                                    icon={['fas', 'chevron-right']} 
                                    className={classes.chevronIcon}
                                />
                            </IconButton>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        </Zoom>
    );
};

export default connect()(CategoryCard);