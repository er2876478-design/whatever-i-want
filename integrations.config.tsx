const integrations = {
  isSanityEnabled: false,
  isStripeEnabled: false,
  isOpenAIEnabled: false,
  isMailchimpEnabled: false,
  isAuthEnabled: false,
};

const messages = {
  sanity: (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      Sanity is not enabled for this portfolio build.
    </div>
  ),
  stripe: (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      Stripe is not enabled for this portfolio build.
    </div>
  ),
  opanAi: (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      OpenAI is not enabled for this portfolio build.
    </div>
  ),
  mailchimp: (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      Mailchimp is not enabled for this portfolio build.
    </div>
  ),
  auth: (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      Auth is not enabled for this portfolio build.
    </div>
  ),
};

export { integrations, messages };
