import Image from 'next/image';
import PropTypes from 'prop-types';

const FeatureCard = ({ title, description, buttonText, imageSrc, altText }: { title: string, description: string, buttonText: string, imageSrc: string, altText: string }) => {
    return (
        <div className="w-full relative bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between h-full">
            <div className="p-1">
                <Image src={imageSrc} alt={altText} className="rounded-t-lg w-full object-cover" />
            </div>
            <div className="p-4 bg-primary-1">
                <button className="px-4 py-2 bg-white text-primary-3 rounded-md hover:bg-teal-600">{buttonText}</button>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white">{description}</p>
            </div>
        </div>
    );
};

FeatureCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
};

export default FeatureCard;
