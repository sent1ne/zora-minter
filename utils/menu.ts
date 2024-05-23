import inquirer from 'inquirer';

export const entryPoint = async () => {
  const questions = [
    {
      name: 'choice',
      type: 'list',
      message: 'Choice:',
      choices: [
        {
          name: 'Zora module',
          value: 'zora',
        },
      ],
      loop: false,
    },
  ];

  const answers = await inquirer.prompt(questions);
  return answers.choice;
};
