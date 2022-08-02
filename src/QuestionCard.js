import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material';

export default function QuestionCard(props) {
    const { question = {}, questionNumber } = props

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
      <CardContent>
      <Typography variant="h5" component="div">
       Question {questionNumber}
      </Typography>

      <Typography sx={{ mb: 1.5 }} color ="text.secondary">
        {question.title}
      </Typography>

      <FormControl>
        <RadioGroup name ="radio-group-quiz">
            {question.options.map((o, i) => {
                return <FormControlLabel key={i+1} 
                value={i+1} control={<Radio />} 
                label={o.description} />
            })}
        </RadioGroup>
      </FormControl>

    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>

        </Card>
    </Box>
  );
}
