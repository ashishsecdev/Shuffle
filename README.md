<h1 align="center">

[![Shuffle Logo](https://github.com/frikky/Shuffle/blob/launch/frontend/public/images/Shuffle_logo_new.png)](https://shuffler.io)

Shuffle Automation

</h1><h4 align="center">

![Shuffle](https://shuffler.io) is an automation platform for and by the community, focusing on accessibility for anyone to automate. Security operations is complex, but it doesn't have to be.

[_Key Features_](https://shuffler.io/docs/features) —
[_Community & Support_](https://discord.gg/B2CBzUm) —
[_Documentation_](https://shuffler.io/docs) —
[_Getting Started_](https://shuffler.io/docs/getting_started) —
[_Development_](https://github.com/frikky/Shuffle/blob/master/.github/CONTRIBUTING.md) 

Follow us on Twitter at [@shuffleio](https://twitter.com/shuffleio).

</h4>

![Example Shuffle webhook integration](https://github.com/frikky/Shuffle/blob/master/frontend/src/assets/img/github_shuffle_img.png)

## Try it
* Self-hosted: Check out the [installation guide](https://github.com/frikky/shuffle/blob/master/.github/install-guide.md)
* Cloud: Register at https://shuffler.io/register and get cooking (missing a lot of features)

Please consider [sponsoring](https://github.com/sponsors/frikky) the project if you want to see more rapid development.

## Support
* [Discord](https://discord.gg/B2CBzUm)
* [Twitter](https://twitter.com/shuffleio)
* [Email](mailto:frikky@shuffler.io)
* [Open issue](https://github.com/frikky/Shuffle/issues/new)
* [Shuffler.io](https://shuffler.io/contact)

## Blogposts
* [1. Introducing Shuffle](https://medium.com/security-operation-capybara/introducing-shuffle-an-open-source-soar-platform-part-1-58a529de7d12)
* [2. Getting started with Shuffle](https://medium.com/security-operation-capybara/getting-started-with-shuffle-an-open-source-soar-platform-part-2-1d7c67a64244)
* [3. Integrating Shuffle with Virustotal and TheHive](https://medium.com/@Frikkylikeme/integrating-shuffle-with-virustotal-and-thehive-open-source-soar-part-3-8e2e0d3396a9)
* [4. Real-time executions with TheHive, Cortex and MISP](https://medium.com/@Frikkylikeme/indicators-and-webhooks-with-thehive-cortex-and-misp-open-source-soar-part-4-f70cde942e59)

## Documentation
[Documentation](https://shuffler.io/docs) can be found on [https://shuffler.io/docs](https://shuffler.io/docs) and is written here: [https://github.com/frikky/shuffle-docs](https://github.com/frikky/shuffle-docs).

## Related repositories
* OpenAPI apps: [https://github.com/frikky/security-openapis](https://github.com/frikky/security-openapis)
* Documentation: [https://github.com/frikky/shuffle-docs](https://github.com/frikky/shuffle-docs)
* Workflows: [https://github.com/frikky/shuffle-workflows](https://github.com/frikky/shuffle-workflows)
* Python apps: [https://github.com/frikky/shuffle-apps](https://github.com/frikky/shuffle-apps)

## Features
* Simple, feature rich [workflow editor](https://shuffler.io/docs/workflows)
* App creator using [OpenAPI](https://github.com/frikky/OpenAPI-security-definitions)
* Premade apps for your security tools
* Organization and sub-organization control
* Hybrid resource sharing with shuffler.io (optional)

## Website
[https://shuffler.io](https://shuffler.io)

## Contributing
We want to make the world of cybersecurity more accessible and need all the help we can get. Send an email to [frikky@shuffler](mailto:frikky@shuffler.io) and we'll make sure to give you any training you may need.

These are the main areas to contribute in:
* Frontend (ReactJS)
* Backend (Golang)
* App Creation (Python & GUI w/OpenAPI)
* Documentation (Markdown)
* Workflow creation (GUI & Conceptualizing) 
* Content Creation (Blogs, videos etc) 

Contributing guidelines are outlined [here](https://github.com/frikky/Shuffle/blob/master/.github/CONTRIBUTING.md).

## Contributors 
![ICPL logo](https://github.com/frikky/Shuffle/blob/launch/frontend/src/assets/img/icpl_logo.png)

**Shuffle**
<a href="https://github.com/frikky/shuffle/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frikky/shuffle" />
</a>

[**App magicians**](https://github.com/frikky/shuffle-apps)
<a href="https://github.com/frikky/shuffle-apps/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frikky/shuffle-apps" />
</a>

## License
All modular information related to Shuffle will be under MIT (anyone can use it for whatever purpose), with Shuffle itself using AGPLv3. 

Workflows: MIT
Documentation: MIT
Shuffle backend: AGPLv3 
Apps, specification and App SDK: MIT

## Architecture
![Shuffle Architecture](https://github.com/frikky/Shuffle/blob/master/frontend/src/assets/img/shuffle_architecture.png)

### Repository overview 
Below is the folder structure with a short explanation
```bash
├── README.md				# What you're reading right now
├── backend					# Contains backend related code.
│   ├── go-app 			# The backend golang webserver
│   └── app_sdk			# The SDK used for apps
├── frontend				# Contains frontend code. ReactJS, Material UI and cytoscape
├── functions				# Has execution and extension resources, such as the Wazuh integration
│   ├── onprem				# Code for onprem solutions
│   │   ├── Orborus 	# Distributes execution locations
│   │   ├── Worker		# Runs a workflow
└ docker-compose.yml 	# Used for deployments
```

**It's in BETA (0.8.60)** - [Get in touch](https://shuffler.io/contact), send a mail to [frikky@shuffler.io](mailto:frikky@shuffler.io) or poke me on twitter [@frikkylikeme](https://twitter.com/frikkylikeme)

