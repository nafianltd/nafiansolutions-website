# NafianSolutions Website with Prismic and Next.js

This project is a starter template for building a website using [Prismic][prismic] as a headless CMS and [Next.js][nextjs] for the frontend. It includes essential configurations and features such as a Rich Text Slice, a homepage, and dynamic page routing.

- **Demo**: [View the live demo][live-demo]
- **Documentation**: [Prismic Next.js Documentation][prismic-docs]

![Website screenshot](https://user-images.githubusercontent.com/31219208/228821412-fdde92b2-c13c-4287-b799-611fa96a5fd6.png)

## 🚀 Quick Start

To create a new project using this template, execute the following commands in your terminal:

sh
npx degit prismicio-community/nextjs-starter-prismic-minimal your-project-name
cd your-project-name
npx @slicemachine/init@latest



These commands will:

1. Initialize a new Next.js project with this starter template.
2. Prompt you to log in to Prismic or [create an account][prismic-sign-up].
3. Set up a new Prismic content repository with sample content.

To start the development server, run:

sh
npm run dev



## Project Usage

### Content Management

Edit your website's content by visiting [prismic.io/dashboard](https://prismic.io/dashboard), selecting your repository, and making changes.

### Creating Pages

To add a new page:

1. Click the green pencil icon and select **Page**.
2. Use Slices to build and organize your page content.
3. Add the new page to your site's navigation to make it discoverable.

### Previewing Content

This project is preconfigured for local previews. For more information on setting up previews for production or staging, refer to [Preview Drafts in Next.js](https://prismic.io/docs/technologies/preview-content-nextjs).

### Customization

This template includes the following Prismic packages:

- `@prismicio/client`: Fetch content from Prismic.
- `@prismicio/react`: Render Prismic content in React.
- `@prismicio/next`: Configure Prismic previews in Next.js.

### Code Structure

To render content from Prismic:

1. Fetch data using `@prismicio/client`.
2. Use `@prismicio/react` components to template the content.

Editable files include:

- `prismicio.ts`: Configuration for `@prismicio/client`.
- `app/layout.tsx`: Layout component with Prismic configuration.
- `app/page.tsx`: Homepage component.
- `app/[uid]/page.tsx`: Dynamic page component.
- `slices/*/index.tsx`: Slice components for customization.

Files to keep unchanged:

- `app/api/exit-preview/route.ts`: Closes Prismic preview sessions.
- `app/api/preview/route.ts`: Launches Prismic preview sessions.
- `app/slice-simulator/page.tsx`: Simulates Slice components in development.
- `slices/`: Contains programmatically generated Slice components.

For more on editing components, see [Fetch Data in Next.js](https://prismic.io/docs/technologies/fetch-data-nextjs) and [Template Content in Next.js](https://prismic.io/docs/technologies/template-content-nextjs).

### Deployment

To deploy your project, follow the instructions in [Deploy your Next.js App](https://prismic.io/docs/technologies/deploy-nextjs).

### Slice Machine

This project uses Slice Machine to manage content models. Models are stored locally and synced with Prismic. Learn more in [Model Content in Next.js](https://prismic.io/docs/technologies/model-content-nextjs).

## Documentation

For comprehensive documentation, visit [Prismic's guide for Next.js][prismic-docs] and the [technical references for Prismic packages](https://prismic.io/docs/technologies/technical-references).

## License

Licensed under the Apache License, Version 2.0. See the LICENSE file for details.

[prismic]: https://prismic.io/
[prismic-docs]: https://prismic.io/docs/technologies/nextjs
[prismic-sign-up]: https://prismic.io/dashboard/signup
[nextjs]: https://nextjs.org/
[live-demo]: https://nextjs-starter-prismic-minimal.vercel.app/