import os
import sys


def validate_environment(required_vars):
    missing = []
    for var in required_vars:
        if not os.getenv(var):
            missing.append(var)

    if missing:
        print(f"ERROR: Missing required environment variables: {missing}")
        sys.exit(1)

    print("All environment variables present")


if __name__ == "__main__":
    required = ["DATABASE_URL", "API_KEY", "SECRET_KEY"]
    validate_environment(required)
