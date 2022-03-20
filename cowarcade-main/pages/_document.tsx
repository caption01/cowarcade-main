import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface ServerStyleSheetProps {
  collectStyles(
    tree: React.ReactNode
  ): React.ReactElement<{ sheet: ServerStyleSheet }>;
  getStyleTags(): string;
  getStyleElement(): Array<React.ReactElement<unknown>>;
  interleaveWithNodeStream(
    readableStream: NodeJS.ReadableStream
  ): NodeJS.ReadableStream;
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

  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Inter&display=optional'
            rel='stylesheet'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <link
            rel='stylesheet'
            type='text/css'
            charset='UTF-8'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
          />
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
