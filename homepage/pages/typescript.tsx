import * as React from "react";
import type { NextPage } from "next";
import { Container, Divider, Typography } from "@mui/material";

/**
 * @author Ross Morrison <ross@rosscode.dev>
 */
const TypeScript: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography mt={2} variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem
        libero, fringilla at mauris et, pharetra efficitur purus. Integer
        consectetur quam at nisl volutpat sodales. Quisque nec consectetur ante.
        Donec faucibus cursus sodales. Nulla pellentesque rhoncus quam sed
        varius. Mauris interdum purus id erat varius, sagittis consectetur enim
        vehicula. Aenean laoreet mattis porttitor. Curabitur euismod ligula non
        felis condimentum, sit amet dapibus lectus auctor. Nulla facilisi. Sed
        in imperdiet justo. Nam eu hendrerit magna. Quisque varius consequat
        consequat. Maecenas cursus urna et nunc interdum egestas.
      </Typography>
      <Typography mt={2} variant="body1">
        Ut venenatis dolor non felis mollis, non malesuada nisi varius. Duis
        malesuada ultricies nisi, at varius dui malesuada ut. Quisque pulvinar
        neque eu ligula eleifend, vitae vehicula leo tempus. Suspendisse
        volutpat urna enim, eu sollicitudin lacus ullamcorper in. Suspendisse
        potenti. Phasellus et purus velit. Pellentesque sagittis lobortis magna.
        Etiam vulputate non massa a egestas. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
      </Typography>
      <Typography mt={2} variant="body1">
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Praesent mollis vulputate odio eget molestie. Maecenas
        vehicula commodo commodo. Curabitur urna turpis, tristique sed nibh nec,
        viverra blandit neque. Praesent tincidunt at tellus eleifend fringilla.
        Mauris congue eu ante quis lacinia. Phasellus vitae sem non nunc
        vehicula porttitor sit amet in purus. Donec diam diam, bibendum semper
        risus sit amet, egestas tincidunt tellus. Donec sit amet diam nec massa
        elementum malesuada. Sed ante ex, ultricies sed justo vitae, congue
        semper elit. Aliquam dui arcu, lobortis vitae aliquet eget, egestas vel
        ante. Quisque ultrices neque id est elementum pellentesque.
      </Typography>
      <Typography mt={2} variant="body1">
        Donec ut dui eleifend, accumsan felis ac, rutrum turpis. Donec imperdiet
        lectus ut enim placerat venenatis. Fusce euismod quam ligula, nec tempor
        magna interdum sed. Mauris varius, nibh at venenatis mattis, ipsum nunc
        sodales ex, id molestie urna elit ac felis. Quisque in commodo mauris.
        Fusce non lectus aliquet, tristique dui at, placerat neque. Curabitur in
        pulvinar tellus. Maecenas sodales luctus magna, ut pulvinar eros pretium
        vel. Nullam eget urna vitae lacus feugiat consequat.
      </Typography>
      <Typography mt={2} variant="body1">
        Integer ullamcorper nec mi et fermentum. Curabitur vitae nisi et libero
        pellentesque blandit. Integer vehicula fermentum mi vel tincidunt. Duis
        finibus dui quis cursus elementum. Ut vehicula urna dolor, in ultricies
        mi accumsan ut. Curabitur non facilisis ex. Suspendisse lobortis nisi
        massa, eu vestibulum urna dignissim non. Mauris auctor nulla ut mauris
        euismod dictum nec eget ipsum. Fusce viverra sit amet enim sed pharetra.
        Phasellus sed felis fringilla orci dignissim faucibus. Aenean vitae nunc
        enim. Sed pharetra fringilla ex a viverra. Integer dictum iaculis sem.
        Maecenas vitae risus a dolor sodales posuere. Phasellus vehicula, risus
        nec eleifend accumsan, nisl enim ornare mi, eu fringilla nulla massa a
        nisi. Integer rhoncus eleifend tellus quis tincidunt.
      </Typography>
    </Container>
  );
};

export async function getStaticProps() {
  return {
    props: {
      name: "TypeScript",
    },
  };
}

export default TypeScript;
