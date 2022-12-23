import React from 'react';
import PropTypes from 'prop-types';

type Props = {
    logo: string //whats.png
    phone: string //319596945
    message: string //mensaje
    width: number
    height: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
    //console.log(logo, phone, message)
    return <>
        <div className={`fixed bottom-2 right-2 flex flexColumn`}>
            <a
                href={`https://wa.me/${phone}?text=${message}`}
                target="_blank"
                rel="noreferrer noopener"
            >
                <img
                    src={logo}
                    alt="whatsappLogo"
                    width={width}
                    height={height}
                />
            </a>
        </div>
    </>
}

WhatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
}

WhatsappButton.defaultProps = {
    logo: "mi-logo.png",
    phone: "3197972142",
    message: "Magno Chocolates",
    width: 80,
    height: 80
}

WhatsappButton.schema = {
    title: "botón de whatsapp",
    type: "object",
    properties: {
        logo: {
            title: "logo de whatsapp",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        }
    },
    phone: {
        title: "telefono",
        description: "Agregar numero",
        type: "string"
    },
    message: {
        title: "mensaje",
        description: "Agregar mensaje",
        type: "string",
        widget: {
            "ui:widget": "textarea"
        }
    }, width: {
        title: "width logo",
        type: "number"
    },
    height: {
        title: "width logo",
        type: "number"
    }
}

export default WhatsappButton;