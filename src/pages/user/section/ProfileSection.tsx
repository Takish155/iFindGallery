import { Avatar, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useUserInfo } from "../../../hooks/useUserInfo";

export const ProfileSection = () => {
  const { data, isLoading } = useUserInfo();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="flex w-11/12 justify-center mx-auto flex-wrap">
      <div className="w-3/12" style={{ minWidth: "300px" }}>
        <Avatar
          src={data?.profile_image.large}
          sx={{ width: "7rem", height: "7rem", margin: "auto auto" }}
        />
      </div>
      <div className="w-7/12" style={{ minWidth: "300px" }}>
        <div className="mb-5">
          <div className="flex content-center gap-5 mb-5 flex-wrap">
            <h2 className="text-4xl">{data?.name}</h2>
            {data?.portfolio_url ? (
              <Button
                variant="contained"
                size="medium"
                component="a"
                href={data.portfolio_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Portfolio
              </Button>
            ) : (
              ""
            )}
          </div>
          <p className="text-lg">{data?.bio}</p>
        </div>
        <div>
          {data?.instagram_username ? (
            <p className="mb-2">
              <a
                href={`https://www.instagram.com/${data.instagram_username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                <InstagramIcon /> {data.instagram_username}
              </a>
            </p>
          ) : (
            ""
          )}
          {data?.for_hire ? (
            <p className="mb-2">
              <WorkOutlineIcon /> Available For Hire
            </p>
          ) : (
            ""
          )}
          {data?.location ? (
            <p className="mb-2">
              <LocationOnIcon /> {data.location}
            </p>
          ) : (
            ""
          )}

          {data?.twitter_username ? (
            <p className="mb-2">
              <a
                href={`https://twitter.com/${data.instagram_username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                <TwitterIcon /> {data.twitter_username}
              </a>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};
