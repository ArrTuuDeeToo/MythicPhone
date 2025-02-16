import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAlert } from '../../hooks';
import { DeleteAdvert, BumpAdvert } from './action';

const ActionButtons = ({ DeleteAdvert, BumpAdvert }) => {
    const showAlert = useAlert();
    const history = useHistory();
    const [isDeleting, setIsDeleting] = useState(false);
    const [isBumping, setIsBumping] = useState(false);
    
    const myAdvertId = useSelector((state) => state.data.data.player.Source);
    const myAdvert = useSelector((state) => state.data.data.adverts)[myAdvertId];
    const loading = useSelector((state) => state.loading);

    const handleDelete = () => {
        setIsDeleting(true);
        setTimeout(() => {
            DeleteAdvert(myAdvertId, () => {
                showAlert('Advertisement Deleted');
                setIsDeleting(false);
            });
        }, 500);
    };

    const handleBump = () => {
        setIsBumping(true);
        BumpAdvert(myAdvertId, myAdvert, () => {
            showAlert('Advertisement Bumped');
            setIsBumping(false);
        });
    };

    const canBump = myAdvert?.time < Date.now() - 1000 * 60 * 30;

    return (
        <div className="fixed bottom-24 right-6 flex flex-col gap-3">
            {myAdvert != null && !isDeleting ? (
                <>
                    {/* Edit Button */}
                    <button
                        onClick={() => history.push('/apps/adverts/edit')}
                        className="w-12 h-12 rounded-full bg-yellow-500 hover:bg-yellow-600 
                                 text-white shadow-lg transform transition-all duration-200 
                                 hover:scale-110 flex items-center justify-center"
                        disabled={loading}
                    >
                        <FontAwesomeIcon 
                            icon={['fas', 'pen-to-square']} 
                            className="text-lg"
                        />
                    </button>

                    {/* Delete Button */}
                    <button
                        onClick={handleDelete}
                        className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 
                                 text-white shadow-lg transform transition-all duration-200 
                                 hover:scale-110 flex items-center justify-center"
                        disabled={isDeleting || loading}
                    >
                        <FontAwesomeIcon 
                            icon={['fas', 'trash']} 
                            className={`text-lg ${isDeleting ? 'animate-spin' : ''}`}
                        />
                    </button>

                    {/* Bump Button - Only shown if enough time has passed */}
                    {canBump && (
                        <button
                            onClick={handleBump}
                            className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 
                                     text-white shadow-lg transform transition-all duration-200 
                                     hover:scale-110 flex items-center justify-center"
                            disabled={isBumping || loading}
                        >
                            <FontAwesomeIcon 
                                icon={['fas', 'upload']} 
                                className={`text-lg ${isBumping ? 'animate-bounce' : ''}`}
                            />
                        </button>
                    )}
                </>
            ) : (
                // Add New Advertisement Button
                <button
                    onClick={() => history.push('/apps/adverts/add')}
                    className="w-12 h-12 rounded-full bg-yellow-500 hover:bg-yellow-600 
                             text-white shadow-lg transform transition-all duration-200 
                             hover:scale-110 flex items-center justify-center"
                    disabled={loading}
                >
                    <FontAwesomeIcon 
                        icon={['fas', 'plus']} 
                        className="text-lg"
                    />
                </button>
            )}

            {/* Loading Overlay */}
            {loading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="animate-spin">
                        <FontAwesomeIcon 
                            icon={['fas', 'circle-notch']} 
                            className="text-yellow-500 text-4xl"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

// Map dispatch to props
const mapDispatchToProps = {
    DeleteAdvert,
    BumpAdvert
};

export default connect(null, mapDispatchToProps)(ActionButtons);