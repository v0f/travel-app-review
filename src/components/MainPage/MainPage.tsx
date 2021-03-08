import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const MainPage: React.FC = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <Card>
        <CardContent>
          <Typography>Hello</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default MainPage;
