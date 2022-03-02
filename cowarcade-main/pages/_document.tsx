import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface ServerStyleSheetProps {
  collectStyles(tree: React.ReactNode): React.ReactElement<{ sheet: ServerStyleSheet }>;
  getStyleTags(): string;
  getStyleElement(): Array<React.ReactElement<unknown>>;
  interleaveWithNodeStream(readableStream: NodeJS.ReadableStream): NodeJS.ReadableStream;
  readonly instance: this;
  seal(): void;
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const sheet = new ServerStyleSheet() as ServerStyleSheetProps;
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}