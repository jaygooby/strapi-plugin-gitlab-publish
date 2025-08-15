import axios from 'axios';

const pluginId = 'plugin::gitlab-publish';

const controller = ({ strapi }) => ({
  publish: async (ctx) => {
    const { project_host, project_id, project_pipeline_token, project_branch, project_variables } = strapi.config.get(pluginId);

    console.log(`project_host: ${project_host}, project_id: ${project_id}, project_pipeline_token: ${project_pipeline_token}, project_branch: ${project_branch}, project_variables: ${project_variables}`);

    const headers = {
      'Content-Type': 'application/json',
    };

    const base_url = `https://${project_host}` || 'https://gitlab.com';
    const url = `${base_url}/api/v4/projects/${project_id}/trigger/pipeline?token=${project_pipeline_token}&ref=${project_branch}&${project_variables}`;

    console.log(`calling: ${url}`);
    
    const { status } = await axios.post(url, {}, { headers });
    const success = status === 201;

    ctx.send({ success });
  },
});

export default controller;
