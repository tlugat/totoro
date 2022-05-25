import { Stack, Button } from '@mui/material';
import {
  FormContainer,
  TextFieldElement,
  DatePickerElement
} from 'react-hook-form-mui';
import SuspenseLoader from 'src/components/SuspenseLoader';
import { User } from 'src/models/user';

interface AdminInfoProps {
  user: User;
}

const AdminInfo = ({ user }: AdminInfoProps) => {
  return (
    <>
      {user ? (
        <>
          <p>Nom : {user.lastname}</p>
          <p>Prenom : {user.firstname}</p>
          <p>Username : {user.username}</p>
          <p>Date de naissance : {user.birthday}</p>
          <p>Email : {user.email}</p>
          <p>Téléphone : {user.phone}</p>
          <p>Email : {user.email}</p>
          <p>Créé le : {user.createdAt}</p>
          <p>Modifié le : {user.updatedAt}</p>
          <p>Statut : {user.status.label}</p>
          <p>Bio : {user.bio}</p>
        </>
      ) : (
        <SuspenseLoader />
      )}
    </>
  );
};

export default AdminInfo;
