import { useSelector, useDispatch } from 'react-redux';
import { setOpen } from '../../store/slices/alert.slice';
import useCard from "../../hooks/useCard"

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const Alert = () => {

    const alert = useSelector(state => state.alert)
    const dispatch = useDispatch()
    const { handleDelete } = useCard()

    const handleClose = () => {
        dispatch(setOpen({
            open: false
        }))
    }

    return (
        <Dialog
            open={alert.open}
            onClose={handleClose}
        >
            <DialogTitle id="alert-dialog-title">
                {"Are you sure?"}
            </DialogTitle>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                    onClick={() => {
                        handleDelete()
                        handleClose()
                    }}
                    autoFocus
                >
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Alert