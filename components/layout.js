import React from 'react';
import Head from '../components/head';
import NProgress from '../components/nprogress';

const Layout = (props) => (
  <>
    <Head title={props.title || 'Home'} />
    <NProgress />

    {!props.main && (
      <div className="header">
        <section>
          <a className="code" href="/">
            &lt;&lt; back to kenneth.io
          </a>
        </section>
      </div>
    )}

    <div className={'app ' + (props.center ? 'app-center' : '')}>
      {props.children}
    </div>

    <script
      async
      src="//platform.twitter.com/widgets.js"
      charset="utf-8"
    ></script>

    <style jsx>{`
      :global(body) {
        font-size: 14px;
        line-height: 20px;
        font-weight: normal;
        font-style: normal;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        color: #333333;
        margin: 0;
        -webkit-text-size-adjust: 100%;
        color: #333333;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
        padding: 60px 50px;
      }

      :global(html) {
        height: 100%;
      }

      :global(#__next) {
        height: 100%;
      }

      :global(h1) {
        font-size: 28px;
        font-weight: 600;
        color: #202020;
        margin-bottom: 8px;
      }

      :global(h2) {
        font-size: 24px;
        margin-bottom: 8px;
      }

      .app {
        overflow: hidden;
        max-width: 600px;
      }

      .app-center {
        margin: 0 auto;
      }

      .header {
        margin-bottom: 50px;
      }

      .code {
        font-family: Consolas, monaco, monospace;
      }
    `}</style>
  </>
);

export default Layout;
