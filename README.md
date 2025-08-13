# Strapi plugin gitlab-publish

This is a plugin for [Strapi](https://github.com/strapi/strapi) headless CMS. It lets you trigger a GitLab Action workflow when the site is ready to be published.

Inspired by [strapi-plugin-github-publish](https://github.com/phantomstudios/strapi-plugin-github-publish) project, thanks to [Phantom](https://github.com/phantomstudios) for his work !

Thanks also to [yasinyildirimeteration](https://github.com/yasinyildirimeteration) as their [pulled](https://github.com/Striffly/strapi-plugin-gitlab-publish/pull/2/commits/d3b57e8720460a0ca7ec6b30f6d76cb9950a95ab) [PRs](https://github.com/Striffly/strapi-plugin-gitlab-publish/pull/2/commits/8a4bc14de44993bdc990cf68f0a19e012b120e64) helped with this fork.

## Introduction

![Screenshot](./docs/screenshot.png "Plugin Screenshot")

When using Strapi as a headless CMS for a statically built website you need a way to trigger the site to rebuild when content has been updated. The typical approach is to setup a Strapi managed webhook to trigger a CI/CD pipeline whenever content changes. This approach has it's issues. For example when making many changes to content, builds are triggered multiple times and deployments can fail due to the site being deployed concurrently.

This plugin tackles the publishing flow a different way. The site administrators can take their time and make many changes and once the content update is complete they can trigger a single build.

## Installation

Install this plugin with npm 

```
npm i https://github.com/jaygooby/strapi-plugin-gitlab-publish
```

## Configuration

Generate a config file at `config/plugins.js` or `config/development/plugins.js` etc...

```javascript
module.exports = ({ env }) => ({
  "gitlab-publish": {
    enabled: true,
    config: {
      project_host: env("GITLAB_PROJECT_HOST"),
      project_id: env("GITLAB_PROJECT_ID"),
      project_branch: env("GITLAB_PROJECT_BRANCH"),
      project_pipeline_token: env("GITLAB_PROJECT_PIPELINE_TOKEN"),      
    },
  },
});
```

Make sure you have these variables in your .env file

```bash
GITLAB_PROJECT_HOST=gitlab.example.com
GITLAB_PROJECT_ID=some-id
GITLAB_PROJECT_BRANCH=your-branch
GITLAB_PROJECT_PIPELINE_TOKEN=secret-token-value
```

## Use the Plugin

When the plugin has been installed correctly just click on `GitLab Publish` in the sidebar under plugins then click "Publish".