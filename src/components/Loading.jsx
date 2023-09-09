
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
    // return <CircularProgress sx={{ display: 'flex', justifyContent: 'center'}}/>
    
    return (
        <div className='loading'>
            <CircularProgress />
        </div>
    )
}

export default Loading;