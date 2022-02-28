// material-ui
import { Button, Typography } from '@mui/material';
import { IconArrowBackUp } from '@tabler/icons';
import { Link as RouterLink } from 'react-router-dom';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const CreateAdminPage = () => (
    <MainCard
        title="New Admin"
        secondary={
            <Button component={RouterLink} to={-1} endIcon={<IconArrowBackUp />}>
                Go Back
            </Button>
        }
    >
        <Typography variant="body2">
            Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
            ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
            reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
            qui officiate descent molls anim id est labours.
        </Typography>
    </MainCard>
);

export default CreateAdminPage;
