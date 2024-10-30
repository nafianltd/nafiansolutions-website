# Nafian Solutions Website with Prismic and Next.js

Nafian Solutions is a data and AI consultancy offering comprehensive services in web development, analytics, AI, data science, and business strategy. This repository contains the codebase for our website, designed to present our core services, projects, and expertise in delivering intelligent solutions to clients. Built with [Prismic](https://prismic.io/) as a headless CMS and [Next.js](https://nextjs.org/) for a modern, responsive frontend, it also provides a robust foundation for scalability, customization, and performance.

- **Live Demo**: [View the live demo](https://nextjs-starter-prismic-minimal.vercel.app/) (not yet available)
- **Documentation**: [Prismic Next.js Documentation](https://prismic.io/docs/technologies/nextjs)

![Nafian Solutions Website Screenshot](https://user-images.githubusercontent.com/31219208/228821412-fdde92b2-c13c-4287-b799-611fa96a5fd6.png)

## 🌟 Features

This project highlights:
- **Modular Content Management**: Built using Prismic with Slice Machine, allowing dynamic content creation and updates.
- **Service-Oriented Architecture**: Showcases Nafian Solutions’ offerings, including AI, data science, web development, and business planning.
- **Responsive Design**: Fully optimized for desktop and mobile, delivering a seamless user experience.
- **Custom Components**: Utilizes `PrismicRichText`, `PrismicText`, `PrismicNextImage`, and `PrismicNextLink` for efficient content rendering.

## 🚀 Quick Start

To start a local development server with this template:

```sh
# Clone the repository
npx degit prismicio-community/nextjs-starter-prismic-minimal your-project-name

# Move to your project folder
cd your-project-name

# Initialize Prismic
npx @slicemachine/init@latest

```

These commands will:

1. Initialize a new Next.js project with this starter template.
2. Prompt you to log in to Prismic or [create an account][prismic-sign-up].
3. Set up a new Prismic content repository with sample content.

To start the development server, run:

```sh
npm run dev
```


### 🖊️ Content Management

Edit your website's content by visiting [prismic.io/dashboard](https://prismic.io/dashboard), selecting your repository, and making changes.

### Creating Pages

To add a new page:

1. Click the green pencil icon and select **Page**.
2. Use Slices to build and organize your page content.
3. Add the new page to your site's navigation to make it discoverable.

### Previewing Content

This project is preconfigured for local previews. For more information on setting up previews for production or staging, refer to [Preview Drafts in Next.js](https://prismic.io/docs/technologies/preview-content-nextjs).

### Customization

This project incorporates the following Prismic packages:

- `@prismicio/client`: For seamless content retrieval.
- `@prismicio/react`: For efficient component-based content rendering.
- `@prismicio/next`: To enable Prismic previews in the Next.js environment.

### Code Structure

Editable files:

- `prismicio.ts`: Configuration for `@prismicio/client`.
- `app/layout.tsx`: Layout component with Prismic configuration.
- `app/page.tsx`: Homepage component.
- `app/[uid]/page.tsx`: Dynamic page component.
- `slices/*/index.tsx`: Slice components for customization.

Files to keep unchanged:

- `app/api/exit-preview/route.ts`: For Prismic preview management.
- `app/api/preview/route.ts`: Preview mode initialization.
- `app/slice-simulator/page.tsx`: Simulates Slice components during development.
- `slices/`: Slice Machine generated components for Prismic content management.

For additional instructions on rendering and fetching data, refer to [Fetch Data in Next.js](https://prismic.io/docs/technologies/fetch-data-nextjs) and [Template Content in Next.js](https://prismic.io/docs/technologies/template-content-nextjs).

### Deployment

To deploy the project, follow the instructions in [Deploy your Next.js App](https://prismic.io/docs/technologies/deploy-nextjs).

### Slice Machine

This project uses Slice Machine to manage content models. Models are stored locally and synced with Prismic. Learn more in [Model Content in Next.js](https://prismic.io/docs/technologies/model-content-nextjs).

## Documentation

For comprehensive documentation, visit [Prismic's guide for Next.js][prismic-docs] and the [technical references for Prismic packages](https://prismic.io/docs/technologies/technical-references).

## License

Licensed under the Apache License, Version 2.0. See the LICENSE file for details.
