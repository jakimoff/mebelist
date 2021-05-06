export default function({ $gtm, route }) {
  $gtm.init(process.env.APP_GTM || 'GTM-no_env')
}
