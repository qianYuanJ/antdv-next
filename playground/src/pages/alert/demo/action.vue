<template>
  <a-alert
    message="Success Tips"
    type="success"
    show-icon
    closable
  >
    <template #action>
      <a-button type="text" size="small">
        UNDO
      </a-button>
    </template>
  </a-alert>
  <br>
  <a-alert
    message="Error Text"
    show-icon
    description="Error Description Error Description Error Description Error Description"
    type="error"
  >
    <template #action>
      <a-button size="small" danger>
        Detail
      </a-button>
    </template>
  </a-alert>
  <br>
  <a-alert
    message="Warning Text"
    type="warning"
    closable
  >
    <template #action>
      <a-space>
        <a-button size="small" type="text">
          Done
        </a-button>
      </a-space>
    </template>
  </a-alert>
  <br>
  <a-alert
    message="Info Text"
    description="Info Description Info Description Info Description Info Description"
    type="info"
    closable
  >
    <template #action>
      <a-space direction="vertical">
        <a-button size="small" type="primary">
          Accept
        </a-button>
        <a-button size="small" danger ghost>
          Decline
        </a-button>
      </a-space>
    </template>
  </a-alert>
</template>
