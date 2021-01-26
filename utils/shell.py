from app.auth.models import  User


def make_shell_context(db):
    return dict(db=db, User=User)