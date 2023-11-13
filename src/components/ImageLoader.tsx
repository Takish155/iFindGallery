import {
  Avatar,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  Skeleton,
  SxProps,
} from "@mui/material";
import { useState } from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Theme } from "@emotion/react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router";

type Props = {
  imgLink: string;
  userImgLink: string;
  portfolioSiteLink: string;
  sponsorSiteLink: string;
  name: string;
  alt: string;
  key: string;
  isForHire: boolean;
  isSponsor: boolean;
  sponsorMoto?: string;
  description: string;
  fullImgLink: string;
  download: string;
  createdAt: string;
  updatedAt: string;
  promotedAt: string;
  username: string;
};

export const ImageLoader = ({
  name,
  imgLink,
  userImgLink,
  alt,
  isForHire,
  isSponsor,
  sponsorMoto,
  description,
  download,
  createdAt,
  updatedAt,
  promotedAt,
  sponsorSiteLink,
  portfolioSiteLink,
  username,
}: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogImageLoading, setDialogImageLoading] = useState(true);
  const { ref, inView } = useInView({ triggerOnce: true });

  const navigate = useNavigate();

  const highResolution = imgLink;
  const lowResolution = imgLink.replace("q=80&w=1080", "q=20&w=100");

  const button: SxProps<Theme> = {
    textAlign: "center",
    marginRight: "1rem",
  };

  return (
    <>
      <Container
        onClick={() => setOpenDialog(true)}
        sx={{
          position: "relative",
          cursor: "pointer",
        }}
      >
        <img
          loading="lazy"
          src={inView ? highResolution : lowResolution}
          ref={ref}
          alt={alt}
          className={
            isSponsor
              ? "mb-8 mx-auto brightness-75 w-full h-auto rounded-xl"
              : "mb-8 mx-auto hover:brightness-50 w-full h-auto rounded-xl"
          }
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        />
        {isHovering || isSponsor ? (
          <>
            {isSponsor ? (
              <>
                <Avatar
                  src={userImgLink}
                  alt={name}
                  sx={{ position: "absolute", top: "1rem", left: "1.9rem" }}
                />
                <p className="absolute text-white top-6 left-20 font-bold">
                  {name}{" "}
                </p>
                <p className="text-white text-sm font-bold bottom-3 right-8 absolute">
                  {sponsorMoto}
                </p>
              </>
            ) : (
              <>
                <Avatar
                  src={userImgLink}
                  alt={name}
                  sx={{ position: "absolute", bottom: "1rem", left: "1.9rem" }}
                />
                <p
                  className={
                    isForHire
                      ? "absolute text-white bottom-10 left-20 font-bold"
                      : "absolute text-white bottom-7 left-20 font-bold"
                  }
                >
                  {name}{" "}
                </p>
              </>
            )}
            {isForHire ? (
              <p className="text-white text-xs bottom-3 left-20 absolute">
                <WorkOutlineIcon />
                &nbsp; Available For Hire
              </p>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </Container>
      <Dialog
        open={openDialog}
        scroll="paper"
        onClose={() => setOpenDialog(false)}
        maxWidth="lg"
      >
        <DialogContent>
          {dialogImageLoading ? (
            <Skeleton variant="rectangular" width={"100%"} height="30rem" />
          ) : (
            ""
          )}
          <img
            src={!dialogImageLoading ? highResolution : lowResolution}
            alt={alt}
            className="mb-5"
            loading="lazy"
            style={{
              width: "100%",
              borderRadius: "0.75rem",
              visibility: dialogImageLoading ? "hidden" : "visible",
              position: dialogImageLoading ? "absolute" : "static",
            }}
            onLoad={() => {
              setDialogImageLoading(false);
            }}
          />

          <section className="flex justify-between items-center flex-wrap my-7 gap-10">
            <div className="flex items-center gap-3">
              <Avatar src={userImgLink} alt={name} />
              <div>
                <p className="text-2xl">
                  {name} {isSponsor ? "(Sponsor)" : "(Author)"}
                </p>
                {isForHire ? (
                  <p>
                    <WorkOutlineIcon />
                    &nbsp; Available For Hire
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex justify-center items-center">
              {isSponsor ? (
                <>
                  <Button
                    size="large"
                    sx={button}
                    onClick={() => navigate(`/search/user/${username}`)}
                  >
                    View {name}'s profile
                  </Button>
                  {sponsorSiteLink?.length === 0 ? (
                    ""
                  ) : (
                    <Button
                      variant="contained"
                      size="large"
                      component="a"
                      href={sponsorSiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={button}
                    >
                      Visit Their Website
                    </Button>
                  )}
                </>
              ) : (
                <>
                  <Button
                    size="large"
                    sx={button}
                    onClick={() => navigate(`/search/user/${username}`)}
                  >
                    View {name}'s other work
                  </Button>
                  {portfolioSiteLink?.length === 0 && !portfolioSiteLink ? (
                    ""
                  ) : (
                    <Button
                      variant="contained"
                      size="large"
                      component="a"
                      href={portfolioSiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={button}
                    >
                      Visit Portfolio
                    </Button>
                  )}
                </>
              )}
            </div>
          </section>
          <p className="text-center text-xl mb-7">{description}</p>
          <Container sx={{ width: "70%", margin: "0 auto" }}>
            <section className="flex justify-evenly flex-wrap">
              {createdAt.length === 0 ? (
                ""
              ) : (
                <div className="mb-3">
                  <h2 className="text-xl font-bold uppercase">Posted At</h2>
                  <p className="text-xl text-center">{createdAt}</p>
                </div>
              )}
              {updatedAt.length === 0 ? (
                ""
              ) : (
                <div className="mb-3">
                  <h2 className="text-xl font-bold uppercase">Updated At</h2>
                  <p className="text-xl text-center">{updatedAt}</p>
                </div>
              )}
              {promotedAt.length === 0 ? (
                ""
              ) : (
                <div className="mb-3">
                  <h2 className="text-xl font-bold uppercase">Promoted At</h2>
                  <p className="text-xl text-center">{promotedAt}</p>
                </div>
              )}
            </section>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            size="large"
            sx={{ fontSize: "1rem" }}
            component="a"
            href={download}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </Button>
          <Button
            onClick={() => {
              setOpenDialog(false);
            }}
            variant="contained"
            color="error"
            size="large"
            sx={{ fontSize: "1rem" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
