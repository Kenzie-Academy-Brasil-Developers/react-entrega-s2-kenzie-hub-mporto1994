import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useState } from 'react';
import { AddPopup } from './styles';
import { display, flexbox } from '@mui/system';

export const AddTech = ({handleClose,open}) => {

    const {register,handleSubmit, formState:{errors}}=useForm({})
    const [token]=useState(JSON.parse(localStorage.getItem("@Kenziehub:token")))
    const createTech = (data) => {
        console.log(data)
        axios.post('https://kenziehub.herokuapp.com/users/techs',data, {headers: { Authorization: `Bearer ${token}` }})
            .then((response)=>{
                // const {token} = response.data;
                console.log(response);

                // localStorage.setItem("@Kenziehub:token", JSON.stringify(token));
                // localStorage.setItem("@Kenziehub:user", JSON.stringify(response.data.user));

                // setAuth(true);
                // history.push("/home");
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    return (


    // <AddPopup>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          width:298,
          height:274,
          display:flex,


        }}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Tech
        </DialogTitle>
        <DialogContent dividers>
        <form onSubmit={handleSubmit(createTech)}>
                    <label htmlFor="">Nome
                        <input type="text" {...register("title")}/>
                    </label>
                    <label htmlFor="">Status
                        <select type="text" {...register("status")}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                    </label>
                    <button type="submit">Criar</button>
                </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    // </AddPopup>
  );
}

