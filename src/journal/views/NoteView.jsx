import { useEffect, useMemo, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css';
import { useForm } from "../../hooks/useForm"
import { setActiveNote, startSaveNote, startUploadingFiles, startDeletingNote } from "../../store/journal"
import { ImageGallery } from "../components"

export const NoteView = () => {

const dispatch = useDispatch();
const { active: note , messageSaved, isSaving } = useSelector( state => state.journal );

const { body, title, date, onInputChange, formState } =  useForm( note );

 const dateString = useMemo( () => {
    const newDate = new Date( date );
    return newDate.toUTCString();
 }, [date])

 const fileInputRef = useRef();

useEffect(() => {
  dispatch( setActiveNote( formState ) )
}, [formState])

useEffect(() => {
  if( messageSaved.length > 0 ){
    Swal.fire('Nota actualizada', messageSaved, 'success');
  }
}, [messageSaved])

const onSaveNote = () => {
    dispatch(startSaveNote() );
}

const onDelete = () => {
    dispatch( startDeletingNote() );
}

const onFileInputChange = ({ target }) => {
   if( target.files === 0 ) return;
   dispatch( startUploadingFiles( target.files ));
};

  return (
        <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1}}>
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light'>{ dateString }</Typography>
            </Grid>

            <Grid item>

            <input 
                type="file" 
                multiple 
                ref={ fileInputRef }
                onChange={ onFileInputChange }
                style={{ display: 'none'}}
             />

             <IconButton
                color="primary"
                disabled={ isSaving }
                sx={{ padding: 2, mb:2}}
                onClick={ () => fileInputRef.current.click() }
             >
                <UploadOutlined/>
             </IconButton>

                <Button 
                    disabled= { isSaving }
                    color='primary'
                    sx={{ padding: 2, mb:2}}
                    onClick={ onSaveNote }
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1}} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    fullWidth
                    type="text"
                    variant="filled"
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1}}
                    name = 'title'
                    value={ title }
                    onChange= { onInputChange }
                />
                <TextField
                    fullWidth
                    type="text"
                    variant="filled"
                    multiline
                    placeholder="Escribe algo"
                    minRows={ 5 }      
                    name='body'
                    value={ body }
                    onChange={ onInputChange }              
                />
            </Grid>

            <Grid container justifyContent='end'>
                <Button
                    onClick={ onDelete }
                    sx={{ mt: 2}}
                    color="error"
                >
                    <DeleteOutline />
                    Borrar
                </Button>
            </Grid>

             {/* Imagen Gallery */}
             <ImageGallery images={ note.imageUrls } />
        </Grid>
  )
}
