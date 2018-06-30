import React, { PropTypes, Component } from 'react';

class PlatformIcon extends Component {
  render() {
    let platformIcon;
    switch (this.props.platform) {
      case 'pc':
        platformIcon = (
          <svg className="ut-icon ut-icon-pc" viewBox="0 0 194 168">
            <path fillRule="evenodd" clipRule="evenodd" d="M64.46 0H0v167.763l41.653-.046V110.72h22.623l26.77-23.037V23.637L64.46 0zM49.07 78.42h-7.417V31.978h7.418V78.42zM122.838 0h44.878l24.236 23.637V64.92h-41.93V31.978h-8.707v103.625h8.708V95.884h41.93v48.195l-27.094 23.683h-37.875l-28.43-23.684V23.636" />
          </svg>
        );
        break;
      case 'ps3':
        platformIcon = (
          <svg className="ut-icon ut-icon-ps3" viewBox="0 0 630 135">
            <path d="M403.05.002h-82.59c-25.476 0-37.96 15.742-37.96 36.18v62.086c0 12.685-5.99 21.79-18.63 21.79h-72.24c-.506 0-.925.417-.925.898v12.53c0 .512.42.94.925.94h81.767c25.464 0 37.98-15.67 37.98-36.118V36.182c0-12.694 5.94-21.818 18.654-21.818h73.02c.573 0 1.022-.41 1.022-.92V.932c0-.49-.45-.93-1.023-.93zm-243.12 0H1C.42.002 0 .442 0 .934v12.51c0 .51.418.94.997.94H150.37c12.63 0 18.623 9.104 18.623 21.797 0 12.643-5.994 21.726-18.62 21.726H32.2C13.85 57.906 0 73.32 0 93.768v39.687c0 .543.42.974 1 .974h26.926c.527 0 .967-.432.967-.975V93.77c0-12.613 7.247-21.51 17.762-21.51H159.93c25.424 0 37.888-15.622 37.888-36.07C197.818 15.774 185.354 0 159.93 0v.002zM617.8 65.538c-.356-.4-.356-1.084 0-1.473 7.917-6.557 11.835-16.438 11.835-27.874 0-20.416-12.438-36.19-37.938-36.19H432.805c-.54 0-.94.44-.94.974v12.468c0 .513.4.942.94.942h149.35c12.594 0 18.668 9.104 18.668 21.797 0 12.643-6.033 21.726-18.666 21.726h-.186l-149.165.03c-.54 0-.94.39-.94.96V71.36c0 .5.4.9.94.9h149.35c16.47.192 18.637 16.23 18.637 24.435l.03 1.544c0 12.714-6.075 21.857-18.667 21.857h-149.35c-.543 0-.94.39-.94.9v12.49c0 .51.397.94.94.94h158.893c25.52 0 37.938-16.94 37.938-36.19V96.69c0-12.27-3.92-23.992-11.835-31.152z" />
          </svg>
        );
        break;
      case 'ps4':
        platformIcon = (
          <svg className="ut-icon ut-icon-ps4" viewBox="0 0 502.921 104.794">
            <path fill="none" d="M502.3 24.062H180.797v65.083H502.92V24.062h-.62zm-13.197 57.156h5.627v.83h-2.322v6.42h-.98v-6.42h-2.324v-.83z" />
            <path d="M491.427 88.467h.98V82.05h2.323v-.832h-5.627v.83h2.324" />
            <path fill="none" d="M502.3 24.062H180.797v65.083H502.92V24.062h-.62zm-6.668 57.156h1.352l2.102 6.19 2.033-6.19h1.18v7.25h-.81v-5.89l-1.953 5.89h-.97l-1.954-5.89v5.89h-.98v-7.25z" />
            <path d="M496.613 82.577l1.953 5.89h.97l1.954-5.89v5.89h.81v-7.25h-1.18l-2.035 6.192-2.1-6.192h-1.353v7.25h.98M335.36 71.1V41.127c0-6.115 2.855-10.494 8.942-10.494h37.547c.23 0 .45-.228.45-.454v-5.964c0-.052-.015-.103-.035-.152h-45.91c-9.95 1.265-14.81 8.2-14.81 17.064V71.1c0 6.115-2.935 10.495-8.94 10.495H272.95c-.225 0-.45.15-.45.453v5.965c0 .247.15.436.33.5h45.018c11.734-.31 17.51-7.8 17.51-17.412zM181.104 88.513h13.183c.178-.063.33-.252.33-.5V68.912c0-6.114 3.454-10.343 8.486-10.343h54.3c12.243 0 18.177-7.55 18.177-17.44 0-8.865-4.857-15.8-14.813-17.065H180.86c-.023.05-.062.09-.062.152v5.964c0 .302.15.454.45.454h71.574c6.084 0 8.938 4.38 8.938 10.494 0 6.116-2.854 10.495-8.938 10.495h-56.628c-8.787 0-15.396 7.477-15.396 17.29v19.104c0 .247.105.435.306.5z" />
            <g>
              <path fill="none" d="M393.714 74.65h60.465c.22 0 .45-.228.45-.454V36.974c0-.83-.752-.906-1.13-.604l-60.157 37.223c-.38.227-.53.453-.45.755.07.15.3.3.82.3z" />
              <path d="M382.08 81.596h72.1c.22 0 .37.15.37.302v6.116c0 .302.23.453.452.453h12.996c.23 0 .45-.15.45-.453V82.05c0-.228.23-.454.45-.454h12.916c.3 0 .45-.227.45-.452v-6.04c0-.228-.15-.454-.45-.454h-12.916c-.22 0-.45-.227-.45-.453V30.632c0-3.555-1.322-5.82-3.543-6.57h-3.76c-1.172.3-2.446.84-3.812 1.66L379.677 73.67c-3.004 1.887-4.057 4-3.305 5.586.6 1.36 2.323 2.342 5.708 2.342zm11.263-8.003L453.5 36.37c.38-.302 1.13-.226 1.13.604v37.223c0 .227-.23.453-.45.453h-60.465c-.52 0-.752-.15-.822-.302-.08-.302.07-.53.45-.755z" />
            </g>
            <g>
              <path d="M50.372 0c5.858 1.092 11.616 2.652 17.346 4.278 3.278.952 6.547 1.937 9.795 2.986 5.102 1.625 10.182 3.465 14.803 6.21 2.07 1.256 4.058 2.676 5.757 4.408 1.84 1.8 3.348 3.933 4.454 6.255 2.015 4.208 2.705 8.91 2.91 13.53.095 3.017.09 6.06-.474 9.036-.468 2.587-1.3 5.138-2.684 7.385-1.223 1.985-2.922 3.7-4.984 4.807-1.978 1.066-4.243 1.574-6.486 1.53-3.402.035-6.703-1.05-9.756-2.47-.055-10.154-.008-20.31-.024-30.46-.022-1.838.103-3.694-.267-5.506-.26-1.405-.833-2.82-1.935-3.773-.73-.66-1.678-1.03-2.63-1.232-.963-.183-1.99.226-2.586 1-.99 1.237-1.25 2.88-1.296 4.422-.008 27.18.01 54.363-.008 81.542-7.312-2.318-14.625-4.637-21.935-6.96-.008-32.33-.005-64.66 0-96.99zM17.506 68.783C27.04 65.408 36.562 62 46.1 58.637c.014 3.743 0 7.487.005 11.233-.006.508.027 1.018-.037 1.523-7.538 2.672-15.06 5.39-22.592 8.08-1.044.394-2.115.84-2.92 1.638-.375.375-.68.927-.475 1.463.26.63.903.974 1.497 1.234 1.652.672 3.458.767 5.218.848 1.962-.03 3.932-.178 5.854-.602 1.298-.255 2.548-.693 3.786-1.158 3.218-1.165 6.436-2.337 9.66-3.49.023 3.166.003 6.334.01 9.503-.01.633.028 1.27-.035 1.9-3.957.712-7.962 1.195-11.985 1.258-8.1.183-16.22-1.07-23.916-3.603-2.525-.73-5.033-1.704-7.14-3.307C1.87 84.258.832 83.13.304 81.74c-.442-1.176-.41-2.535.14-3.67.532-1.132 1.46-2.027 2.482-2.722 2.365-1.633 4.973-2.878 7.616-3.99 2.277-.97 4.64-1.727 6.964-2.575z" />
              <path d="M94.21 64.52c2.16-.25 4.337-.31 6.51-.387 7.15.027 14.338.917 21.178 3.062 1.342.408 2.642.936 3.98 1.362 2.382.87 4.768 1.927 6.676 3.64 1.147 1.046 2.135 2.455 2.15 4.064.067 1.31-.526 2.566-1.375 3.532-1.617 1.812-3.753 3.057-5.898 4.143-2.283 1.164-4.737 1.915-7.13 2.8-14.613 5.248-29.226 10.493-43.836 15.746-.002-4.092.004-8.184-.002-12.275.022-.163-.068-.448.163-.49 11.118-3.957 22.233-7.924 33.35-11.89 1.502-.562 3.12-.97 4.397-1.99.522-.41 1.033-1.06.777-1.764-.266-.614-.904-.955-1.49-1.21-1.665-.658-3.477-.786-5.247-.835-2.77.02-5.567.36-8.202 1.25-7.918 2.774-15.823 5.583-23.744 8.35 0-4.396-.002-8.788.002-13.182 5.73-2.01 11.715-3.23 17.74-3.923zM126.692 94.796c1.73-.216 3.535.56 4.57 1.96 1.132 1.447 1.34 3.533.54 5.185-.806 1.715-2.65 2.916-4.56 2.853-1.756.04-3.458-.984-4.323-2.5-.783-1.334-.876-3.043-.27-4.463.68-1.64 2.28-2.836 4.042-3.034zm-.376.923c-.968.22-1.847.806-2.425 1.613-.694.95-.957 2.205-.693 3.354.222 1.067.897 2.02 1.808 2.61 1.403.923 3.37.872 4.712-.14 1.385-.98 2.043-2.858 1.567-4.485-.294-1.1-1.08-2.036-2.07-2.58-.88-.47-1.93-.604-2.898-.373z" />
              <path d="M125.118 96.896c.9-.005 1.805 0 2.707-.003.51.007 1.072.126 1.433.517.364.41.393 1.008.293 1.523-.055.34-.355.54-.572.78.19.166.43.323.475.595.104.52-.006 1.068.16 1.578.106.18.213.362.22.578-.373.01-.746.003-1.12.01-.252-.594-.064-1.26-.22-1.872-.063-.25-.32-.404-.567-.396-.61-.026-1.222-.008-1.83-.01-.01.76.022 1.52-.018 2.277-.318-.005-.637-.005-.955 0-.016-1.86-.005-3.718-.005-5.577zm.978.884v1.54c.545.004 1.09.008 1.638.003.27-.002.586-.053.762-.283.185-.293.18-.683.014-.98-.14-.236-.437-.26-.68-.274-.58-.017-1.157-.007-1.734-.006z" />
            </g>
          </svg>
        );
        break;
      case 'x360':
        platformIcon = (
          <svg className="ut-icon ut-icon-xbox-360" viewBox="0 0 163 28">
            <path d="M106.043 14.663v-2.667h3.05c2.213 0 3.8-.454 4.763-1.36.962-.908 1.443-2.015 1.443-3.322 0-1.428-.538-2.562-1.608-3.403-1.07-.84-2.41-1.26-4.02-1.26-2.99 0-5.058 1.447-6.207 4.34h-3.03c1.73-4.66 4.91-6.99 9.545-6.99 2.603 0 4.705.693 6.308 2.08 1.604 1.385 2.405 3.05 2.405 5 0 1.512-.484 2.83-1.452 3.956-.966 1.125-2.2 1.833-3.7 2.124 1.693.242 3.148.95 4.364 2.123 1.216 1.174 1.824 2.692 1.824 4.556 0 2.212-.904 4.08-2.713 5.597-1.81 1.518-4.292 2.277-7.45 2.277-2.492 0-4.628-.592-6.406-1.78-1.78-1.185-3.42-4.587-3.703-7.777h3.12c.54 4.163 3.256 6.854 6.934 6.854 2.397 0 4.118-.51 5.164-1.534 1.047-1.02 1.57-2.24 1.57-3.657 0-1.537-.626-2.78-1.88-3.73-1.25-.95-3.008-1.425-5.27-1.425h-3.05zm33.79-7.858h-3.048c-1.028-2.698-2.903-4.047-5.626-4.047-5 0-7.55 3.372-7.66 11.466.762-1.646 1.88-2.916 3.35-3.81 1.47-.897 3.02-1.344 4.653-1.344 2.47 0 4.537.862 6.207 2.586s2.506 4.466 2.506 6.873c0 2.49-.887 4.644-2.66 6.46s-4.043 2.72-6.813 2.72c-3.158 0-5.67-1.185-7.532-3.556-1.86-2.372-2.793-5.602-2.793-9.692 0-3.993.88-7.4 2.64-10.227 1.762-2.825 4.493-4.238 8.195-4.238 4.247.002 7.108 2.27 8.584 6.807zm-9.164 18.24c1.886 0 3.432-.623 4.636-1.87 1.203-1.246 1.806-2.74 1.806-4.482 0-1.718-.587-3.866-1.76-5.094s-2.633-1.844-4.375-1.844c-1.803 0-3.372.645-4.71 1.933-1.336 1.29-2.005 3.473-2.005 5.202 0 1.598.6 3.022 1.797 4.274 1.196 1.253 2.733 1.878 4.61 1.878zm21.55 2.668c-3.192 0-5.706-1.33-7.54-3.992-1.832-2.66-2.75-5.963-2.75-9.91 0-3.87.87-7.14 2.614-9.81 1.742-2.665 4.27-4 7.586-4 3.462 0 6.054 1.39 7.778 4.175 1.724 2.783 2.586 6.05 2.586 9.8 0 3.666-.887 6.873-2.66 9.62-1.77 2.746-4.31 4.12-7.612 4.12zm.02-2.614c2.383 0 4.115-1.02 5.2-3.06 1.08-2.04 1.623-4.595 1.623-7.668 0-3.375-.554-6.183-1.66-8.42-1.107-2.24-2.877-3.358-5.31-3.358-2.36 0-4.08 1.022-5.163 3.067-1.082 2.046-1.623 4.73-1.623 8.06 0 3.46.57 6.22 1.715 8.284 1.144 2.063 2.883 3.094 5.218 3.094zM22.903.162L13.62 13.52l9.267 13.667H18.75l-7.334-11.125L3.9 27.187H0l9.375-13.503L.217.164h4.118l7.243 10.98L18.984.164h3.92zm23.44 18.71c0 1.344-.254 2.53-.76 3.558-.506 1.03-1.186 1.877-2.04 2.543-1.013.8-2.123 1.367-3.334 1.705-1.21.34-3.424.51-5.29.51h-9.538V14.065h-5.42l1.808-3.03h3.612V.162h7.966c1.963 0 4.107.073 5.083.218.978.147 2.25.45 3.14.91.987.52 1.704 1.187 2.15 2.004.445.817.67 1.793.67 2.93 0 1.283-.327 2.375-.978 3.276s-1.517 1.625-2.6 2.17v.144c1.817.375 2.913 1.177 3.96 2.405 1.05 1.226 1.573 2.78 1.573 4.653zm-5.68-12.176c0-.653-.107-1.204-.324-1.65-.217-.45-.565-.812-1.047-1.09-.566-.327-2.266-.53-3.072-.608-.806-.08-1.805-.12-2.997-.12H28.96v7.804h4.623c1.12 0 2.01-.057 2.674-.172.662-.115 1.95-.354 2.518-.717.565-.363 1.304-.832 1.54-1.407.233-.577.35-1.257.35-2.043zm1.958 12.322c0-1.09-.163-1.955-.488-2.597s-.915-1.186-1.77-1.634c-.578-.303-1.28-.5-2.104-.59-.825-.09-2.503-.136-3.684-.136H28.96V24.12h4.73c1.566 0 3.524-.083 4.523-.245 1-.164 1.818-.463 2.457-.898.675-.473 1.168-1.01 1.48-1.616.315-.604.472-1.383.472-2.34zm6.908-5.61c0 2.94.957 5.493 2.872 7.66 1.88 2.202 4.27 3.3 7.172 3.3 2.107 0 4.154-.73 6.142-2.195 2.66-1.972 3.992-4.725 3.992-8.257 0-2.808-.88-5.198-2.638-7.17-1.927-2.166-4.45-3.25-7.568-3.25-2.698 0-5.028.97-6.99 2.905-1.988 1.973-2.982 4.308-2.982 7.006zm-3.793 0c0-3.666 1.427-6.824 4.28-9.474C52.74 1.42 55.793.162 59.177.162c3.48 0 6.575 1.047 9.284 3.14 3.313 2.517 4.97 6.007 4.97 10.472 0 3.424-1.26 6.545-3.776 9.364-2.722 2.99-5.997 4.484-9.826 4.484-3.77 0-7.003-1.23-9.7-3.686-2.927-2.72-4.39-6.23-4.39-10.525zM92.954.163L83.67 13.52l9.267 13.667H88.8l-7.334-11.125-7.515 11.125h-3.9l9.376-13.503-9.16-13.52h4.12l7.243 10.98L89.033.164h3.92z" />
          </svg>
        );
        break;
      default:
        platformIcon = (
          <svg className="ut-icon ut-icon-xbox-one" viewBox="0.5 12.032 89 14">
            <path d="M35.48 18.29c.536 0 1.487-1.432 1.487-2.684 0-1.24-1.42-2.234-2.53-2.234h-5.222v4.616h-1.637l-.746 1.34h2.234v5.66h5.206s3.573-1.4 3.573-3.574-1.82-3.13-2.38-3.13l.014.006zm-4.623-3.574h2.682c1.05 0 1.636.445 1.636 1.492 0 1.043-.84 1.785-1.787 1.785h-2.523l-.01-3.273v-.004zm3.428 8.784h-3.42v-4.023h3.12c1.396 0 2.235.73 2.235 1.946 0 1.204-1.19 2.08-1.936 2.08V23.5zM7.342 12.032c-1.423 0-2.75.45-3.845 1.19.225-.064 2.088-.51 3.7 1.34 1.886-1.448 3.505-1.627 4.316-1.038-1.81 1.296-2.68 2.082-2.68 2.082s4.085 4.44 3.566 7.73c-1.387-3.127-4.214-6.247-5.058-6.54-1.7 1.536-5.05 4.86-5.197 6.537 1.25 1.457 3.113 2.387 5.197 2.387 3.78 0 6.844-3.067 6.844-6.847 0-3.778-3.065-6.838-6.844-6.838v-.003zm20.54 1.353h-1.635l-3.128 4.608-3.128-4.608h-1.93l4.02 5.81-4.02 5.798h1.786l3.128-4.612 3.127 4.613h1.93l-4.02-5.808 3.87-5.8zM6.005 15.76c-1.667-1.615-1.796-1.895-3.262-1.93C1.368 15.082.5 16.88.5 18.887c0 1.697.618 3.237 1.636 4.438-.09-2.867 2.695-6.925 3.87-7.566zm78.887 8.337v-4.32h4.163v-1.043h-4.17v-3.86h4.318v-1.196h-5.51v11.306H89.5v-.895h-4.608v.007zM43.87 13.372c-3.245 0-5.876 2.64-5.876 5.878 0 3.237 2.636 5.877 5.876 5.877 3.25 0 5.886-2.64 5.886-5.877 0-3.238-2.635-5.878-5.89-5.878h.004zm0 10.27c-2.422 0-4.388-1.967-4.388-4.39 0-2.425 1.966-4.39 4.388-4.39 2.426 0 4.394 1.97 4.394 4.39 0 2.415-1.968 4.39-4.394 4.39zM81 23.195l-6.39-9.52h-1.186V24.98h1.187v-9.66l6.407 9.673h1.19v-11.32h-1.19v9.518l-.017.004zM67.106 13.52c-2.915 0-5.28 2.636-5.28 5.882s2.365 5.873 5.28 5.873c2.914 0 5.284-2.635 5.284-5.873 0-3.242-2.36-5.882-5.28-5.882h-.004zm.08 10.726c-2.218 0-4.024-2.173-4.024-4.844 0-2.675 1.807-4.84 4.023-4.84s4.015 2.16 4.015 4.84c0 2.67-1.798 4.84-4.015 4.84v.004zM59.73 13.372H58.1l-3.133 4.612-3.116-4.617h-1.937l4.02 5.812-4.02 5.807h1.785l3.12-4.62 3.124 4.616h1.938l-4.023-5.808 3.874-5.803z" />
          </svg>
        );
        break;
    }
    return platformIcon;
  }
}

PlatformIcon.propTypes = {
  platform: PropTypes.string.isRequired,
};

export default PlatformIcon;
