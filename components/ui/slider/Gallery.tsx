import {
  AspectRatio,
  HStack,
  Image,
  Skeleton,
  Stack,
  StackProps,
  useBreakpointValue,
  Flex,
  Heading,
} from "@chakra-ui/react";
import * as React from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import {
  Carousel,
  CarouselIconButton,
  CarouselSlide,
  useCarousel,
} from "./Carousel";
import { ProductImage } from "./_data";

interface GalleryProps {
  images: ProductImage[];
  aspectRatio?: number;
  rootProps?: StackProps;
}

const Gallery = (props: GalleryProps) => {
  const { images, aspectRatio = 9 / 16, rootProps } = props;
  const [index, setIndex] = React.useState(0);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slidesPerView = useBreakpointValue({ base: 3, md: 5 });

  const [ref, slider] = useCarousel({
    slides: {
      perView: slidesPerView,
      spacing: useBreakpointValue({ base: 16, md: 24 }),
    },
    slideChanged: (slider) => setCurrentSlide(slider.track.details.rel),
  });

  let number = Math.floor(Math.random() * 5 + 0);

  return (
    <Stack spacing="4" {...rootProps}>
      <Flex marginBottom={10}>
        <Heading
          as="h2"
          size="4xl"
          color="black"
          textTransform="uppercase"
          lineHeight={1}
        >
          /
        </Heading>
        <Heading
          as="h2"
          size="4xl"
          color="black"
          textTransform="uppercase"
          lineHeight={1}
        >
          Gallery
        </Heading>
      </Flex>
      <HStack spacing="4">
        <CarouselIconButton
          onClick={() => slider.current?.prev()}
          icon={<IoChevronBackOutline />}
          aria-label="Previous slide"
          disabled={currentSlide === 0}
        />
        <Carousel ref={ref} direction="row" width="full">
          {images.map((image, i) => (
            <CarouselSlide
              key={i}
              onClick={() => setIndex(i)}
              cursor="pointer"
              transform={`rotate(70deg)`}
            >
              <AspectRatio ratio={9 / 16} transition="all 200ms">
                <Image
                  src={image.src}
                  objectFit="cover"
                  alt={image.alt}
                  fallback={<Skeleton />}
                />
              </AspectRatio>
            </CarouselSlide>
          ))}
        </Carousel>
        <CarouselIconButton
          onClick={() => slider.current?.next()}
          icon={<IoChevronForwardOutline />}
          aria-label="Next slide"
          disabled={currentSlide + Number(slidesPerView) === images.length}
        />
      </HStack>
    </Stack>
  );
};

export default Gallery;
