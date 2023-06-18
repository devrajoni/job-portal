import * as React from 'react'

const fontSize = {
  h1: 'text-4xl',
  h2: 'text-2xl',
  h3: 'text-base',
  h4: 'text-base',
  h5: 'text-base',
  h6: 'text-base',
}

function Title({ size, as, color = 'text-secondary', className, ...rest }) {
  const Tag = as ?? size
  return <Tag className={` ${fontSize[size]} ${className} ${color}`} {...rest} />
}

function H1(props) {
  return <Title {...props} size='h1' />
}

function H2(props) {
  return <Title {...props} size='h2' />
}

function H3(props) {
  return <Title {...props} size='h3' />
}

function H4(props) {
  return <Title {...props} size='h4' />
}

function H5(props) {
  return <Title {...props} size='h5' />
}

function H6(props) {
  return <Title {...props} size='h6' />
}

function Paragraph({ className, color = 'text-gray', as = 'p', ...rest }) {
  return React.createElement(as, {
    className: `text-sm ${color} ${className}`,
    ...rest,
  })
}

export { H1, H2, H3, H4, H5, H6, Paragraph }
