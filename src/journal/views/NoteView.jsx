import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"


export const NoteView = () => {
  return (
        <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1}}>
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light'>28 de agosto, 2023</Typography>
            </Grid>

            <Grid item>
                <Button color='primary' sx={{ padding: 2, mb:2}}>
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
                />
                <TextField
                    fullWidth
                    type="text"
                    variant="filled"
                    multiline
                    placeholder="Escribe algo"
                    minRows={ 5 }                    
                />
            </Grid>

             {/* Imagen Gallery */}
             <ImageGallery/>
        </Grid>
  )
}
