import React from 'react';
import { Card, Button } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';

const ProjectCard = () => {
  const projectData = [
    {
      name: 'Stock Wise',
      description:
        'A stock inventory management system that allows users to assess the current status levels of products within a workplace. Users are aware of these products through a Dashboard and can themselves report products as Low In Stock.',
      technologies: [
        'React JS',
        'AntD',
        'Node JS',
        'Express',
        'Axios',
        'Mongoose',
        'Bcrypt',
      ],
      imageName: 'STOCKWISE.png',
      repoLink: 'https://github.com/steph-morrissey/stock-wise-client',
      deployedLink: 'https://steph-morrissey.github.io/stock-wise-client/#/',
    },
    {
      name: 'PowerUp',
      description:
        'PowerUp is a game where users can play in either a SuperHero or Pokemon universe and battle against a series of characters, which each round symbolising a play made by the user, either choosing a power property (SuperHero) or through and attack/defend (Pokemon) play.',
      technologies: ['Semantic UI', 'Anime JS', 'SuperHero API', 'Poke API'],
      imageName: 'POWERUP.png',
      repoLink: 'https://github.com/steph-morrissey/powerup',
      deployedLink: 'https://steph-morrissey.github.io/powerup/',
    },
    {
      name: 'Weather Dashboard',
      description:
        'An in browser weather application, that allows a user to search for a current day and 7 day forecast based off a specified location. Users can see previously searched locations for easy access to popular searched locations.',
      technologies: ['jQuery', 'Bootstrap', 'MomentJS', 'OpenWeatherAPI'],
      imageName: 'WEATHER_DASHBOARD.png',
      repoLink:
        'https://github.com/steph-morrissey/steph-morrissey-homework-week-6',
      deployedLink:
        'https://steph-morrissey.github.io/steph-morrissey-homework-week-6/',
    },
    {
      name: 'Meal Joy: Recipes Made Easy',
      description:
        'An application that allows users to search for a list of recipes based off a search keyword. Users have the option of saving and favouriting recipes that they can re-visit at another time.',
      technologies: [
        'Node JS',
        'Express',
        'Express Handlebars',
        'Passport',
        'Axios',
        'Tailwind',
      ],
      imageName: 'MEALJOY.png',
      repoLink: 'https://github.com/hyperkarmic/Meal-Joy',
      deployedLink: 'https://infinite-dusk-61271.herokuapp.com/',
    },

    {
      name: 'Day Scheduler',
      description:
        'An in browser application whereby users can input the upcoming events that they have scheduled throughout the day, and understand what events are past/present and future based off colour coding. Events can be added or deleted by the user.',
      technologies: ['Bootstrap', 'jQuery', 'MomentJS'],
      imageName: 'DAY_PLANNER.png',
      repoLink:
        'https://github.com/steph-morrissey/steph-morrissey-homework-week-5',
      deployedLink:
        'https://steph-morrissey.github.io/steph-morrissey-homework-week-5/',
    },
  ];
  return projectData.map((project) => {
    return (
      <Card
        key={project.name}
        bordered
        style={{
          width: 400,
          margin: '20px',
        }}
        actions={[
          <Button
            type='text'
            icon={<GithubOutlined />}
            href={project.repoLink}
          />,
          <Button
            type='text'
            icon={<LinkOutlined />}
            href={project.deployedLink}
          />,
        ]}
        hoverable
        cover={
          <img
            alt='example'
            height='300px'
            src={`Images/${project.imageName}`}
          />
        }
      >
        <Card.Meta title={project.name} description={project.description} />
      </Card>
    );
  });
};

export default ProjectCard;
